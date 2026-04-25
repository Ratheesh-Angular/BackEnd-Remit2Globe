import { prisma } from "../lib/prisma";
import { Beneficiary, DeliveryChannel } from "../generated/prisma";

export interface CreateBeneficiaryDto {
  deliveryChannel: DeliveryChannel;
  firstName: string;
  lastName: string;
  /** Defaults to true. */
  active?: boolean;
  // Bank Transfer
  country?: string;
  bankName?: string;
  branchName?: string;
  accountNumber?: string;
  swiftBic?: string;
  // Mobile Money
  mobileMoneyProvider?: string;
  mobileNumber?: string;
}

function validateBeneficiaryData(data: CreateBeneficiaryDto): void {
  if (!data.firstName?.trim()) {
    throw new Error("First name is required");
  }
  if (!data.lastName?.trim()) {
    throw new Error("Last name is required");
  }

  if (data.deliveryChannel === "BANK_TRANSFER") {
    if (!data.country?.trim()) throw new Error("Country is required for bank transfers");
    if (!data.bankName?.trim()) throw new Error("Bank name is required");
    if (!data.accountNumber?.trim()) throw new Error("Account number / IBAN is required");
    if (!data.swiftBic?.trim()) throw new Error("SWIFT/BIC code is required");
  }

  if (data.deliveryChannel === "MOBILE_MONEY") {
    if (!data.country?.trim()) throw new Error("Country is required for mobile money transfers");
    if (!data.mobileMoneyProvider?.trim()) throw new Error("Mobile money provider is required");
    if (!data.mobileNumber?.trim()) throw new Error("Mobile number is required");
  }
}

function beneficiaryToDto(b: Beneficiary): CreateBeneficiaryDto {
  return {
    deliveryChannel: b.deliveryChannel,
    firstName: b.firstName,
    lastName: b.lastName,
    country: b.country ?? undefined,
    bankName: b.bankName ?? undefined,
    branchName: b.branchName ?? undefined,
    accountNumber: b.accountNumber ?? undefined,
    swiftBic: b.swiftBic ?? undefined,
    mobileMoneyProvider: b.mobileMoneyProvider ?? undefined,
    mobileNumber: b.mobileNumber ?? undefined,
  };
}

function mergeBeneficiaryUpdate(
  existing: Beneficiary,
  patch: Partial<CreateBeneficiaryDto>,
): CreateBeneficiaryDto {
  const base = beneficiaryToDto(existing);
  return {
    deliveryChannel: existing.deliveryChannel,
    firstName:
      patch.firstName !== undefined ? patch.firstName : base.firstName,
    lastName: patch.lastName !== undefined ? patch.lastName : base.lastName,
    country: patch.country !== undefined ? patch.country : base.country,
    bankName: patch.bankName !== undefined ? patch.bankName : base.bankName,
    branchName:
      patch.branchName !== undefined ? patch.branchName : base.branchName,
    accountNumber:
      patch.accountNumber !== undefined
        ? patch.accountNumber
        : base.accountNumber,
    swiftBic: patch.swiftBic !== undefined ? patch.swiftBic : base.swiftBic,
    mobileMoneyProvider:
      patch.mobileMoneyProvider !== undefined
        ? patch.mobileMoneyProvider
        : base.mobileMoneyProvider,
    mobileNumber:
      patch.mobileNumber !== undefined
        ? patch.mobileNumber
        : base.mobileNumber,
  };
}

export const beneficiaryService = {
  async create(userId: string, data: CreateBeneficiaryDto) {
    validateBeneficiaryData(data);

    return prisma.beneficiary.create({
      data: {
        userId,
        deliveryChannel: data.deliveryChannel,
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        active: data.active === false ? false : true,
        country: data.country?.trim() ?? null,
        bankName: data.bankName?.trim() ?? null,
        branchName:
          data.deliveryChannel === "BANK_TRANSFER"
            ? data.branchName?.trim() || null
            : null,
        accountNumber: data.accountNumber?.trim() ?? null,
        swiftBic: data.swiftBic?.trim() ?? null,
        mobileMoneyProvider: data.mobileMoneyProvider?.trim() ?? null,
        mobileNumber: data.mobileNumber?.trim() ?? null,
      },
    });
  },

  async listByUser(userId: string, opts?: { activeOnly?: boolean }) {
    return prisma.beneficiary.findMany({
      where: {
        userId,
        ...(opts?.activeOnly ? { active: true } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
  },

  async getById(userId: string, id: string) {
    const beneficiary = await prisma.beneficiary.findFirst({
      where: { id, userId },
    });
    if (!beneficiary) throw new Error("Beneficiary not found");
    return beneficiary;
  },

  async update(
    userId: string,
    id: string,
    data: Partial<CreateBeneficiaryDto> & { active?: boolean },
  ) {
    const existing = await beneficiaryService.getById(userId, id);

    const definedKeys = Object.keys(data).filter(
      (k) => (data as Record<string, unknown>)[k] !== undefined,
    );
    const onlyActiveToggle =
      definedKeys.length === 1 &&
      definedKeys[0] === "active" &&
      typeof data.active === "boolean";

    if (onlyActiveToggle) {
      return prisma.beneficiary.update({
        where: { id },
        data: { active: data.active! },
      });
    }

    const merged = mergeBeneficiaryUpdate(existing, data);
    validateBeneficiaryData(merged);

    const channel = existing.deliveryChannel;
    return prisma.beneficiary.update({
      where: { id },
      data: {
        firstName: merged.firstName.trim(),
        lastName: merged.lastName.trim(),
        ...(data.active !== undefined ? { active: data.active } : {}),
        country: merged.country?.trim() ?? null,
        bankName: merged.bankName?.trim() ?? null,
        branchName:
          channel === "BANK_TRANSFER"
            ? merged.branchName?.trim() || null
            : null,
        accountNumber: merged.accountNumber?.trim() ?? null,
        swiftBic: merged.swiftBic?.trim() ?? null,
        mobileMoneyProvider: merged.mobileMoneyProvider?.trim() ?? null,
        mobileNumber: merged.mobileNumber?.trim() ?? null,
      },
    });
  },

  async delete(userId: string, id: string) {
    // Confirm ownership first
    await beneficiaryService.getById(userId, id);
    await prisma.beneficiary.delete({ where: { id } });
  },
};
