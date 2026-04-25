"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSenderContext = getSenderContext;
exports.getQuote = getQuote;
exports.listCompanyAccounts = listCompanyAccounts;
exports.createDraftTransfer = createDraftTransfer;
exports.getTransferForUser = getTransferForUser;
exports.updateTransferStep = updateTransferStep;
exports.confirmTransfer = confirmTransfer;
exports.addPaymentProofs = addPaymentProofs;
exports.deletePaymentProof = deletePaymentProof;
exports.listMyTransfers = listMyTransfers;
const crypto_1 = require("crypto");
const prisma_1 = require("../generated/prisma");
const prisma_2 = require("../lib/prisma");
const remittance_constants_1 = require("../constants/remittance.constants");
const flex_service_1 = require("../integrations/flex/flex.service");
const s3_service_1 = require("./s3.service");
const QUOTE_TTL_MS = 15 * 60 * 1000;
const REMITTANCE_TRANSFER_INCLUDE = {
    beneficiary: true,
    paymentProofs: { orderBy: { uploadedAt: "asc" } },
};
function d(n) {
    return new prisma_1.Prisma.Decimal(n);
}
function toNum(v) {
    if (v == null)
        return 0;
    return Number(v.toString());
}
function roundMoney(n) {
    return Math.round(n * 100) / 100;
}
function newReferenceCode() {
    return `RM-${(0, crypto_1.randomBytes)(4).toString("hex").toUpperCase()}`;
}
function guessIso2(raw) {
    if (!raw || !raw.trim())
        return null;
    const t = raw.trim();
    const two = t.length === 2 ? t.toUpperCase() : "";
    if (two && remittance_constants_1.COUNTRY_META[two])
        return two;
    /** Profile may store ISO2 before we add full COUNTRY_META (e.g. Zambia). */
    if (two && remittance_constants_1.AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(two))
        return two;
    const up = t.toUpperCase();
    for (const [iso, meta] of Object.entries(remittance_constants_1.COUNTRY_META)) {
        if (meta.name.toLowerCase() === t.toLowerCase())
            return iso;
        if (up === iso)
            return iso;
    }
    return null;
}
async function ensureSandboxSeeds() {
    const [acctCount, rateCount] = await Promise.all([
        prisma_2.prisma.companyBankAccount.count(),
        prisma_2.prisma.fxRate.count(),
    ]);
    if (acctCount === 0) {
        await prisma_2.prisma.companyBankAccount.createMany({
            data: [
                {
                    bankName: "Example Bank NA",
                    accountName: "Remit2Globe Client Funds (USD)",
                    accountNumber: "000123456789",
                    swiftBic: "EXNAUS33",
                    currency: "USD",
                    countryNote: "United States",
                    instructions: "Include the transfer reference in the payment description. Transfers are credited after reconciliation (typically 1–2 business days).",
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
                    instructions: "Use your unique reference code as the payment reference. This is a sandbox display account.",
                    sortOrder: 1,
                },
            ],
        });
    }
    if (rateCount === 0) {
        const rows = [];
        for (const [pair, rate] of Object.entries(remittance_constants_1.SANDBOX_FX_FALLBACK)) {
            const [from, to] = pair.split("_");
            rows.push({
                fromCurrency: from,
                toCurrency: to,
                rate: d(rate),
                feePercent: d(remittance_constants_1.SANDBOX_DEV_FEE_PERCENT),
                feeFixed: d(remittance_constants_1.SANDBOX_DEV_FEE_FIXED),
                active: true,
            });
        }
        await prisma_2.prisma.fxRate.createMany({ data: rows });
    }
}
async function getSenderContext(userId) {
    const user = await prisma_2.prisma.user.findUnique({
        where: { id: userId },
        select: {
            country: true,
            individualProfile: { select: { country: true } },
        },
    });
    if (!user)
        throw new Error("User not found");
    const iso = guessIso2(user.individualProfile?.country) ?? guessIso2(user.country);
    const meta = iso ? remittance_constants_1.COUNTRY_META[iso] : null;
    const isAfricanSender = iso != null &&
        (meta?.african === true || remittance_constants_1.AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(iso));
    const payCurrencies = [];
    if (meta?.currency)
        payCurrencies.push(meta.currency);
    if (isAfricanSender && !payCurrencies.includes("USD"))
        payCurrencies.push("USD");
    if (payCurrencies.length === 0) {
        payCurrencies.push("USD");
    }
    const canUseMobilePayIn = Boolean(iso &&
        (remittance_constants_1.AFRICAN_SENDER_MOBILE_PAYIN_ISO2.has(iso) || meta?.african === true));
    const mobilePayInMarketsLabel = [...remittance_constants_1.AFRICAN_SENDER_MOBILE_PAYIN_ISO2]
        .map((code) => remittance_constants_1.COUNTRY_META[code]?.name ?? code)
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
async function getQuote(params) {
    await ensureSandboxSeeds();
    const { fromCurrency, toCurrency, payAmount } = params;
    if (!fromCurrency || !toCurrency || payAmount <= 0) {
        throw new Error("Invalid quote parameters");
    }
    const from = fromCurrency.toUpperCase();
    const to = toCurrency.toUpperCase();
    if (from === to) {
        let rateRow = await prisma_2.prisma.fxRate.findFirst({
            where: { fromCurrency: from, toCurrency: to, active: true },
        });
        const feePercent = rateRow
            ? toNum(rateRow.feePercent)
            : remittance_constants_1.SANDBOX_DEV_FEE_PERCENT;
        const feeFixed = rateRow
            ? toNum(rateRow.feeFixed)
            : remittance_constants_1.SANDBOX_DEV_FEE_FIXED;
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
    let rateRow = await prisma_2.prisma.fxRate.findFirst({
        where: { fromCurrency: from, toCurrency: to, active: true },
    });
    let rateNum;
    let feePercent = 0;
    let feeFixed = 0;
    if (rateRow) {
        rateNum = toNum(rateRow.rate);
        feePercent = toNum(rateRow.feePercent);
        feeFixed = toNum(rateRow.feeFixed);
    }
    else {
        const computed = (0, remittance_constants_1.resolveSandboxFallbackRate)(from, to);
        if (computed == null) {
            throw new Error(`No exchange rate configured for ${from} → ${to}. Contact support.`);
        }
        rateNum = computed;
        feePercent = remittance_constants_1.SANDBOX_DEV_FEE_PERCENT;
        feeFixed = remittance_constants_1.SANDBOX_DEV_FEE_FIXED;
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
async function listCompanyAccounts(currency) {
    await ensureSandboxSeeds();
    return prisma_2.prisma.companyBankAccount.findMany({
        where: {
            active: true,
            ...(currency
                ? { currency: currency.toUpperCase() }
                : {}),
        },
        orderBy: { sortOrder: "asc" },
    });
}
async function createDraftTransfer(userId, body) {
    const quote = await getQuote({
        fromCurrency: body.payCurrency,
        toCurrency: body.receiveCurrency,
        payAmount: body.payAmount,
    });
    if (Math.abs(quote.receiveAmount - body.receiveAmount) > 0.02 ||
        Math.abs(quote.feeAmount - body.feeAmount) > 0.02 ||
        Math.abs(quote.rate - body.fxRateSnapshot) > 1e-6) {
        throw new Error("Quote expired or amounts do not match. Please refresh the quote.");
    }
    const exp = new Date(body.quoteExpiresAt);
    if (Date.now() > exp.getTime()) {
        throw new Error("Quote expired. Please get a new quote.");
    }
    let ref = newReferenceCode();
    for (let i = 0; i < 5; i++) {
        const exists = await prisma_2.prisma.remittanceTransfer.findUnique({
            where: { referenceCode: ref },
        });
        if (!exists)
            break;
        ref = newReferenceCode();
    }
    return prisma_2.prisma.remittanceTransfer.create({
        data: {
            userId,
            referenceCode: ref,
            status: prisma_1.RemittanceStatus.DRAFT,
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
async function getTransferForUser(userId, id) {
    const t = await prisma_2.prisma.remittanceTransfer.findFirst({
        where: { id, userId },
        include: REMITTANCE_TRANSFER_INCLUDE,
    });
    if (!t)
        throw new Error("Transfer not found");
    return t;
}
async function updateTransferStep(userId, id, step, body) {
    const t = await getTransferForUser(userId, id);
    if (t.status !== prisma_1.RemittanceStatus.DRAFT) {
        throw new Error("This transfer can no longer be edited");
    }
    if (step === 2) {
        const beneficiaryId = body.beneficiaryId;
        if (!beneficiaryId)
            throw new Error("beneficiaryId is required");
        const ben = await prisma_2.prisma.beneficiary.findFirst({
            where: { id: beneficiaryId, userId },
        });
        if (!ben)
            throw new Error("Beneficiary not found");
        if (!ben.active) {
            throw new Error("This beneficiary is inactive. Activate them under Beneficiaries or choose another recipient.");
        }
        const dest = (t.recipientCountryLabel ?? "").trim().toLowerCase();
        const benCountry = (ben.country ?? "").trim().toLowerCase();
        if (dest && benCountry && dest !== benCountry) {
            throw new Error("Selected beneficiary country does not match the destination country for this transfer.");
        }
        return prisma_2.prisma.remittanceTransfer.update({
            where: { id },
            data: {
                beneficiaryId,
                currentStep: 2,
            },
            include: REMITTANCE_TRANSFER_INCLUDE,
        });
    }
    if (step === 3) {
        const sourceOfIncome = body.sourceOfIncome;
        const transferPurpose = body.transferPurpose;
        const relationshipToRecipient = body.relationshipToRecipient;
        if (!sourceOfIncome || !transferPurpose || !relationshipToRecipient) {
            throw new Error("Source, purpose, and relationship are required");
        }
        return prisma_2.prisma.remittanceTransfer.update({
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
        const payInMethod = body.payInMethod;
        const payerPhone = body.payerPhone?.trim();
        if (!payInMethod)
            throw new Error("payInMethod is required");
        if (payInMethod === prisma_1.PayInMethod.MOBILE_MONEY) {
            const ctx = await getSenderContext(userId);
            if (!ctx.canUseMobilePayIn) {
                throw new Error("Mobile money pay-in is not available for your region");
            }
            if (!payerPhone)
                throw new Error("payerPhone is required for mobile pay-in");
        }
        return prisma_2.prisma.remittanceTransfer.update({
            where: { id },
            data: {
                payInMethod,
                payerPhone: payInMethod === prisma_1.PayInMethod.MOBILE_MONEY ? payerPhone : null,
                currentStep: 4,
            },
            include: REMITTANCE_TRANSFER_INCLUDE,
        });
    }
    throw new Error("Invalid step");
}
async function confirmTransfer(userId, id) {
    const t = await getTransferForUser(userId, id);
    if (t.status !== prisma_1.RemittanceStatus.DRAFT) {
        throw new Error("Transfer already submitted");
    }
    if (!t.beneficiaryId)
        throw new Error("Select a beneficiary");
    if (!t.sourceOfIncome || !t.transferPurpose || !t.relationshipToRecipient) {
        throw new Error("Complete compliance information");
    }
    if (!t.payInMethod)
        throw new Error("Select how you will pay");
    if (t.payInMethod === prisma_1.PayInMethod.MOBILE_MONEY && !t.payerPhone) {
        throw new Error("Payer phone required");
    }
    if (t.payInMethod === prisma_1.PayInMethod.MOBILE_MONEY) {
        const payAmt = roundMoney(toNum(t.payAmount));
        if (!payAmt || payAmt <= 0) {
            throw new Error("Quoted pay amount is missing or invalid; refresh your quote.");
        }
        const msisdn = (0, flex_service_1.normalizeMsisdn)(t.payerPhone);
        if (!msisdn || msisdn.length < 9) {
            throw new Error("Enter a valid mobile number for STK collection.");
        }
        const callbackUrl = (0, flex_service_1.getFlexStkCallbackUrl)();
        const paymentDesc = `Remit2Globe ${t.referenceCode}`.slice(0, 140);
        await (0, flex_service_1.initiateStkPush)({
            transactionReference: t.referenceCode,
            msisdn,
            collectionAmount: payAmt,
            paymentDesc,
            callbackUrl,
        });
    }
    return prisma_2.prisma.remittanceTransfer.update({
        where: { id },
        data: {
            status: prisma_1.RemittanceStatus.PENDING_PAYMENT,
            currentStep: 5,
        },
        include: REMITTANCE_TRANSFER_INCLUDE,
    });
}
async function addPaymentProofs(userId, transferId, files) {
    const t = await getTransferForUser(userId, transferId);
    if (t.payInMethod !== prisma_1.PayInMethod.BANK_TRANSFER) {
        throw new Error("Payment proof uploads are only for bank transfer pay-in.");
    }
    if (t.status !== prisma_1.RemittanceStatus.PENDING_PAYMENT) {
        throw new Error("You can upload payment proof after submitting this transfer.");
    }
    if (!files?.length)
        throw new Error("No files uploaded");
    const created = [];
    for (const file of files) {
        const { fileUrl, fileKey } = await s3_service_1.s3Service.uploadRemittancePaymentProof(file.buffer, file.originalname, file.mimetype, userId, transferId);
        const row = await prisma_2.prisma.remittancePaymentProof.create({
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
async function deletePaymentProof(userId, transferId, proofId) {
    const t = await getTransferForUser(userId, transferId);
    if (t.status !== prisma_1.RemittanceStatus.PENDING_PAYMENT) {
        throw new Error("Cannot remove payment proof for this transfer.");
    }
    const proof = await prisma_2.prisma.remittancePaymentProof.findFirst({
        where: { id: proofId, transferId },
    });
    if (!proof)
        throw new Error("Payment proof not found");
    try {
        await s3_service_1.s3Service.deleteFile(proof.fileKey);
    }
    catch {
        /* continue — object may already be gone */
    }
    await prisma_2.prisma.remittancePaymentProof.delete({ where: { id: proofId } });
}
function dateRangeFromIsoDateString(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
    if (!m)
        return undefined;
    const y = parseInt(m[1], 10);
    const mo = parseInt(m[2], 10);
    const d = parseInt(m[3], 10);
    if (mo < 1 || mo > 12 || d < 1 || d > 31)
        return undefined;
    const gte = new Date(Date.UTC(y, mo - 1, d, 0, 0, 0, 0));
    const lt = new Date(gte);
    lt.setUTCDate(lt.getUTCDate() + 1);
    return { gte, lt };
}
function dateRangeForFilters(q) {
    if (q.year == null || !Number.isFinite(q.year))
        return undefined;
    const y = q.year;
    if (q.month != null && q.month >= 1 && q.month <= 12) {
        if (q.day != null && q.day >= 1 && q.day <= 31) {
            const gte = new Date(Date.UTC(y, q.month - 1, q.day, 0, 0, 0, 0));
            const lt = new Date(gte);
            lt.setUTCDate(lt.getUTCDate() + 1);
            return { gte, lt };
        }
        const gte = new Date(Date.UTC(y, q.month - 1, 1, 0, 0, 0, 0));
        const lt = new Date(Date.UTC(y, q.month, 1, 0, 0, 0, 0));
        return { gte, lt };
    }
    const gte = new Date(Date.UTC(y, 0, 1, 0, 0, 0, 0));
    const lt = new Date(Date.UTC(y + 1, 0, 1, 0, 0, 0, 0));
    return { gte, lt };
}
async function listMyTransfers(userId, query = {}) {
    const limit = Math.min(Math.max(query.limit ?? 200, 1), 500);
    const where = {
        userId,
        status: { not: prisma_1.RemittanceStatus.DRAFT },
    };
    const refQ = query.reference?.trim();
    if (refQ) {
        where.referenceCode = { contains: refQ, mode: "insensitive" };
    }
    let dr;
    if (query.date?.trim()) {
        dr = dateRangeFromIsoDateString(query.date);
    }
    else {
        dr = dateRangeForFilters({
            year: query.year,
            month: query.month,
            day: query.day,
        });
    }
    if (dr) {
        where.createdAt = { gte: dr.gte, lt: dr.lt };
    }
    return prisma_2.prisma.remittanceTransfer.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        include: REMITTANCE_TRANSFER_INCLUDE,
    });
}
