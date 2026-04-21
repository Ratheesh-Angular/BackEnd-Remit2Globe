import { randomBytes } from "crypto";
import {
  PayInMethod,
  RemittanceStatus,
  Prisma,
} from "../generated/prisma";
import { prisma } from "../lib/prisma";
import {
  AFRICAN_SENDER_MOBILE_PAYIN_ISO2,
  COUNTRY_META,
  SANDBOX_DEV_FEE_FIXED,
  SANDBOX_DEV_FEE_PERCENT,
  SANDBOX_FX_FALLBACK,
  resolveSandboxFallbackRate,
} from "../constants/remittance.constants";
import {
  getFlexStkCallbackUrl,
  initiateStkPush,
  normalizeMsisdn,
} from "../integrations/flex/flex.service";
import { s3Service } from "./s3.service";

const QUOTE_TTL_MS = 15 * 60 * 1000;

const REMITTANCE_TRANSFER_INCLUDE = {
  beneficiary: true,
  paymentProofs: { orderBy: { uploadedAt: "asc" as const } },
} satisfies Prisma.RemittanceTransferInclude;

function d(n: number | string): Prisma.Decimal {
  return new Prisma.Decimal(n);
}

function toNum(v: Prisma.Decimal | null | undefined): number {
  if (v == null) return 0;
  return Number(v.toString());
}

function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

function newReferenceCode(): string {
  return `RM-${randomBytes(4).toString("hex").toUpperCase()}`;
}

function guessIso2(raw: string | null | undefined): string | null {
  if (!raw || !raw.trim()) return null;
  const t = raw.trim();
  const two = t.length === 2 ? t.toUpperCase() : "";
  if (two && COUNTRY_META[two]) return two;
  /** Profile may store ISO2 before we add full COUNTRY_META (e.g. Zambia). */
  if (two && AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(two)) return two;
  const up = t.toUpperCase();
  for (const [iso, meta] of Object.entries(COUNTRY_META)) {
    if (meta.name.toLowerCase() === t.toLowerCase()) return iso;
    if (up === iso) return iso;
  }
  return null;
}

async function ensureSandboxSeeds() {
  const [acctCount, rateCount] = await Promise.all([
    prisma.companyBankAccount.count(),
    prisma.fxRate.count(),
  ]);

  if (acctCount === 0) {
    await prisma.companyBankAccount.createMany({
      data: [
        {
          bankName: "Example Bank NA",
          accountName: "Remit2Globe Client Funds (USD)",
          accountNumber: "000123456789",
          swiftBic: "EXNAUS33",
          currency: "USD",
          countryNote: "United States",
          instructions:
            "Include the transfer reference in the payment description. Transfers are credited after reconciliation (typically 1–2 business days).",
          sortOrder: 0,
        },
        {
          bankName: "Example Bank UK",
          accountName: "Remit2Globe Ltd (GBP)",
          accountNumber: "GB29NWBK60161331926819",
          swiftBic: "NWBKGB2L",
          iban: "GB29NWBK60161331926819",
          currency: "GBP",
          countryNote: "United Kingdom",
          instructions:
            "Use your unique reference code as the payment reference. This is a sandbox display account.",
          sortOrder: 1,
        },
      ],
    });
  }

  if (rateCount === 0) {
    const rows: Prisma.FxRateCreateManyInput[] = [];
    for (const [pair, rate] of Object.entries(SANDBOX_FX_FALLBACK)) {
      const [from, to] = pair.split("_");
      rows.push({
        fromCurrency: from,
        toCurrency: to,
        rate: d(rate),
        feePercent: d(SANDBOX_DEV_FEE_PERCENT),
        feeFixed: d(SANDBOX_DEV_FEE_FIXED),
        active: true,
      });
    }
    await prisma.fxRate.createMany({ data: rows });
  }
}

export async function getSenderContext(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      country: true,
      individualProfile: { select: { country: true } },
    },
  });
  if (!user) throw new Error("User not found");

  const iso =
    guessIso2(user.individualProfile?.country) ?? guessIso2(user.country);
  const meta = iso ? COUNTRY_META[iso] : null;
  const isAfricanSender =
    iso != null &&
    (meta?.african === true || AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(iso));

  const payCurrencies: string[] = [];
  if (meta?.currency) payCurrencies.push(meta.currency);
  if (isAfricanSender && !payCurrencies.includes("USD"))
    payCurrencies.push("USD");

  if (payCurrencies.length === 0) {
    payCurrencies.push("USD");
  }

  const canUseMobilePayIn = Boolean(
    iso &&
      (AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(iso) || meta?.african === true),
  );

  const mobilePayInMarketsLabel = [...AFRICAN_SENDER_MOBILE_PAYIN_ISO2]
    .map((code) => COUNTRY_META[code]?.name ?? code)
    .sort((a, b) => a.localeCompare(b))
    .join(", ");

  return {
    senderCountryIso2: iso,
    senderCountryName: meta?.name ?? user.country ?? null,
    defaultPayCurrency: meta?.currency ?? "USD",
    payCurrencies,
    canUseMobilePayIn,
    /** Human-readable list for UI when mobile pay-in is unavailable */
    mobilePayInMarketsLabel,
  };
}

export async function getQuote(params: {
  fromCurrency: string;
  toCurrency: string;
  payAmount: number;
}) {
  await ensureSandboxSeeds();
  const { fromCurrency, toCurrency, payAmount } = params;
  if (!fromCurrency || !toCurrency || payAmount <= 0) {
    throw new Error("Invalid quote parameters");
  }

  const from = fromCurrency.toUpperCase();
  const to = toCurrency.toUpperCase();

  if (from === to) {
    let rateRow = await prisma.fxRate.findFirst({
      where: { fromCurrency: from, toCurrency: to, active: true },
    });
    const feePercent = rateRow
      ? toNum(rateRow.feePercent)
      : SANDBOX_DEV_FEE_PERCENT;
    const feeFixed = rateRow
      ? toNum(rateRow.feeFixed)
      : SANDBOX_DEV_FEE_FIXED;
    const feeFromPercent = payAmount * (feePercent / 100);
    const feeAmount = roundMoney(feeFromPercent + feeFixed);
    const receiveAmount = roundMoney(payAmount - feeFromPercent - feeFixed);
    if (receiveAmount <= 0) {
      throw new Error("Receive amount must be positive after fees");
    }
    return {
      fromCurrency: from,
      toCurrency: to,
      payAmount: roundMoney(payAmount),
      rate: 1,
      feeAmount,
      receiveAmount,
      quoteExpiresAt: new Date(Date.now() + QUOTE_TTL_MS).toISOString(),
      indicative: true,
    };
  }

  let rateRow = await prisma.fxRate.findFirst({
    where: { fromCurrency: from, toCurrency: to, active: true },
  });

  let rateNum: number;
  let feePercent = 0;
  let feeFixed = 0;

  if (rateRow) {
    rateNum = toNum(rateRow.rate);
    feePercent = toNum(rateRow.feePercent);
    feeFixed = toNum(rateRow.feeFixed);
  } else {
    const computed = resolveSandboxFallbackRate(from, to);
    if (computed == null) {
      throw new Error(
        `No exchange rate configured for ${from} → ${to}. Contact support.`,
      );
    }
    rateNum = computed;
    feePercent = SANDBOX_DEV_FEE_PERCENT;
    feeFixed = SANDBOX_DEV_FEE_FIXED;
  }

  const grossReceive = payAmount * rateNum;
  const feeFromPercent = grossReceive * (feePercent / 100);
  const feeAmount = roundMoney(feeFromPercent + feeFixed);
  const receiveAmount = roundMoney(grossReceive - feeFromPercent - feeFixed);

  if (receiveAmount <= 0) {
    throw new Error("Receive amount must be positive after fees");
  }

  const expiresAt = new Date(Date.now() + QUOTE_TTL_MS);

  return {
    fromCurrency: from,
    toCurrency: to,
    payAmount: roundMoney(payAmount),
    rate: rateNum,
    feeAmount,
    receiveAmount,
    quoteExpiresAt: expiresAt.toISOString(),
    indicative: true,
  };
}

export async function listCompanyAccounts(currency?: string) {
  await ensureSandboxSeeds();
  return prisma.companyBankAccount.findMany({
    where: {
      active: true,
      ...(currency
        ? { currency: currency.toUpperCase() }
        : {}),
    },
    orderBy: { sortOrder: "asc" },
  });
}

export async function createDraftTransfer(
  userId: string,
  body: {
    senderCountryIso2?: string | null;
    payCurrency: string;
    payAmount: number;
    recipientCountryLabel: string;
    recipientCountryIso2?: string | null;
    receiveCurrency: string;
    receiveAmount: number;
    fxRateSnapshot: number;
    feeAmount: number;
    quoteExpiresAt: string;
  },
) {
  const quote = await getQuote({
    fromCurrency: body.payCurrency,
    toCurrency: body.receiveCurrency,
    payAmount: body.payAmount,
  });

  if (
    Math.abs(quote.receiveAmount - body.receiveAmount) > 0.02 ||
    Math.abs(quote.feeAmount - body.feeAmount) > 0.02 ||
    Math.abs(quote.rate - body.fxRateSnapshot) > 1e-6
  ) {
    throw new Error(
      "Quote expired or amounts do not match. Please refresh the quote.",
    );
  }

  const exp = new Date(body.quoteExpiresAt);
  if (Date.now() > exp.getTime()) {
    throw new Error("Quote expired. Please get a new quote.");
  }

  let ref = newReferenceCode();
  for (let i = 0; i < 5; i++) {
    const exists = await prisma.remittanceTransfer.findUnique({
      where: { referenceCode: ref },
    });
    if (!exists) break;
    ref = newReferenceCode();
  }

  return prisma.remittanceTransfer.create({
    data: {
      userId,
      referenceCode: ref,
      status: RemittanceStatus.DRAFT,
      currentStep: 1,
      senderCountryIso2: body.senderCountryIso2 ?? null,
      payCurrency: body.payCurrency.toUpperCase(),
      payAmount: d(body.payAmount),
      recipientCountryLabel: body.recipientCountryLabel.trim(),
      recipientCountryIso2: body.recipientCountryIso2?.toUpperCase() ?? null,
      receiveCurrency: body.receiveCurrency.toUpperCase(),
      receiveAmount: d(body.receiveAmount),
      fxRateSnapshot: d(quote.rate),
      feeAmount: d(quote.feeAmount),
      quoteExpiresAt: exp,
    },
  });
}

export async function getTransferForUser(userId: string, id: string) {
  const t = await prisma.remittanceTransfer.findFirst({
    where: { id, userId },
    include: REMITTANCE_TRANSFER_INCLUDE,
  });
  if (!t) throw new Error("Transfer not found");
  return t;
}

export async function updateTransferStep(
  userId: string,
  id: string,
  step: number,
  body: Record<string, unknown>,
) {
  const t = await getTransferForUser(userId, id);
  if (t.status !== RemittanceStatus.DRAFT) {
    throw new Error("This transfer can no longer be edited");
  }

  if (step === 2) {
    const beneficiaryId = body.beneficiaryId as string | undefined;
    if (!beneficiaryId) throw new Error("beneficiaryId is required");
    const ben = await prisma.beneficiary.findFirst({
      where: { id: beneficiaryId, userId },
    });
    if (!ben) throw new Error("Beneficiary not found");
    const dest = (t.recipientCountryLabel ?? "").trim().toLowerCase();
    const benCountry = (ben.country ?? "").trim().toLowerCase();
    if (dest && benCountry && dest !== benCountry) {
      throw new Error(
        "Selected beneficiary country does not match the destination country for this transfer.",
      );
    }
    return prisma.remittanceTransfer.update({
      where: { id },
      data: {
        beneficiaryId,
        currentStep: 2,
      },
      include: REMITTANCE_TRANSFER_INCLUDE,
    });
  }

  if (step === 3) {
    const sourceOfIncome = body.sourceOfIncome as string | undefined;
    const transferPurpose = body.transferPurpose as string | undefined;
    const relationshipToRecipient = body.relationshipToRecipient as
      | string
      | undefined;
    if (!sourceOfIncome || !transferPurpose || !relationshipToRecipient) {
      throw new Error("Source, purpose, and relationship are required");
    }
    return prisma.remittanceTransfer.update({
      where: { id },
      data: {
        sourceOfIncome,
        transferPurpose,
        relationshipToRecipient,
        complianceAccepted: false,
        currentStep: 3,
      },
      include: REMITTANCE_TRANSFER_INCLUDE,
    });
  }

  if (step === 4) {
    const payInMethod = body.payInMethod as PayInMethod | undefined;
    const payerPhone = (body.payerPhone as string | undefined)?.trim();
    if (!payInMethod) throw new Error("payInMethod is required");
    if (payInMethod === PayInMethod.MOBILE_MONEY) {
      const ctx = await getSenderContext(userId);
      if (!ctx.canUseMobilePayIn) {
        throw new Error("Mobile money pay-in is not available for your region");
      }
      if (!payerPhone) throw new Error("payerPhone is required for mobile pay-in");
    }
    return prisma.remittanceTransfer.update({
      where: { id },
      data: {
        payInMethod,
        payerPhone: payInMethod === PayInMethod.MOBILE_MONEY ? payerPhone : null,
        currentStep: 4,
      },
      include: REMITTANCE_TRANSFER_INCLUDE,
    });
  }

  throw new Error("Invalid step");
}

export async function confirmTransfer(userId: string, id: string) {
  const t = await getTransferForUser(userId, id);
  if (t.status !== RemittanceStatus.DRAFT) {
    throw new Error("Transfer already submitted");
  }
  if (!t.beneficiaryId) throw new Error("Select a beneficiary");
  if (!t.sourceOfIncome || !t.transferPurpose || !t.relationshipToRecipient) {
    throw new Error("Complete compliance information");
  }
  if (!t.payInMethod) throw new Error("Select how you will pay");
  if (t.payInMethod === PayInMethod.MOBILE_MONEY && !t.payerPhone) {
    throw new Error("Payer phone required");
  }

  if (t.payInMethod === PayInMethod.MOBILE_MONEY) {
    const payAmt = roundMoney(toNum(t.payAmount));
    if (!payAmt || payAmt <= 0) {
      throw new Error("Quoted pay amount is missing or invalid; refresh your quote.");
    }
    const msisdn = normalizeMsisdn(t.payerPhone!);
    if (!msisdn || msisdn.length < 9) {
      throw new Error("Enter a valid mobile number for STK collection.");
    }
    const callbackUrl = getFlexStkCallbackUrl();
    const paymentDesc = `Remit2Globe ${t.referenceCode}`.slice(0, 140);
    await initiateStkPush({
      transactionReference: t.referenceCode,
      msisdn,
      collectionAmount: payAmt,
      paymentDesc,
      callbackUrl,
    });
  }

  return prisma.remittanceTransfer.update({
    where: { id },
    data: {
      status: RemittanceStatus.PENDING_PAYMENT,
      currentStep: 5,
    },
    include: REMITTANCE_TRANSFER_INCLUDE,
  });
}

export async function addPaymentProofs(
  userId: string,
  transferId: string,
  files: Express.Multer.File[],
) {
  const t = await getTransferForUser(userId, transferId);
  if (t.payInMethod !== PayInMethod.BANK_TRANSFER) {
    throw new Error(
      "Payment proof uploads are only for bank transfer pay-in.",
    );
  }
  if (t.status !== RemittanceStatus.PENDING_PAYMENT) {
    throw new Error(
      "You can upload payment proof after submitting this transfer.",
    );
  }
  if (!files?.length) throw new Error("No files uploaded");

  const created: Array<{
    id: string;
    transferId: string;
    fileUrl: string;
    fileKey: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedAt: Date;
  }> = [];

  for (const file of files) {
    const { fileUrl, fileKey } = await s3Service.uploadRemittancePaymentProof(
      file.buffer,
      file.originalname,
      file.mimetype,
      userId,
      transferId,
    );
    const row = await prisma.remittancePaymentProof.create({
      data: {
        transferId,
        fileUrl,
        fileKey,
        fileName: file.originalname.slice(0, 240),
        mimeType: file.mimetype,
        fileSize: file.size,
      },
    });
    created.push(row);
  }

  return created;
}

export async function deletePaymentProof(
  userId: string,
  transferId: string,
  proofId: string,
) {
  const t = await getTransferForUser(userId, transferId);
  if (t.status !== RemittanceStatus.PENDING_PAYMENT) {
    throw new Error("Cannot remove payment proof for this transfer.");
  }
  const proof = await prisma.remittancePaymentProof.findFirst({
    where: { id: proofId, transferId },
  });
  if (!proof) throw new Error("Payment proof not found");

  try {
    await s3Service.deleteFile(proof.fileKey);
  } catch {
    /* continue — object may already be gone */
  }
  await prisma.remittancePaymentProof.delete({ where: { id: proofId } });
}

export async function listMyTransfers(userId: string, limit = 20) {
  return prisma.remittanceTransfer.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: REMITTANCE_TRANSFER_INCLUDE,
  });
}
