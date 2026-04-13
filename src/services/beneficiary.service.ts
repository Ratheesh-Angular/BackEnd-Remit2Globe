import { prisma } from "../lib/prisma";
import { DeliveryChannel } from "../generated/prisma";

export interface CreateBeneficiaryDto {
  deliveryChannel: DeliveryChannel;
  fullName: string;
  // Bank Transfer
  country?: string;
  bankName?: string;
  accountNumber?: string;
  swiftBic?: string;
  // Mobile Money
  mobileMoneyProvider?: string;
  mobileNumber?: string;
}

function validateBeneficiaryData(data: CreateBeneficiaryDto): void {
  if (!data.fullName?.trim()) {
    throw new Error("Full name is required");
  }

  if (data.deliveryChannel === "BANK_TRANSFER") {
    if (!data.country?.trim()) throw new Error("Country is required for bank transfers");
    if (!data.bankName?.trim()) throw new Error("Bank name is required");
    if (!data.accountNumber?.trim()) throw new Error("Account number / IBAN is required");
    if (!data.swiftBic?.trim()) throw new Error("SWIFT/BIC code is required");
  }

  if (data.deliveryChannel === "MOBILE_MONEY") {
    if (!data.mobileMoneyProvider?.trim()) throw new Error("Mobile money provider is required");
    if (!data.mobileNumber?.trim()) throw new Error("Mobile number is required");
  }
}

export const beneficiaryService = {
  async create(userId: string, data: CreateBeneficiaryDto) {
    validateBeneficiaryData(data);

    return prisma.beneficiary.create({
      data: {
        userId,
        deliveryChannel: data.deliveryChannel,
        fullName: data.fullName.trim(),
        country: data.country?.trim() ?? null,
        bankName: data.bankName?.trim() ?? null,
        accountNumber: data.accountNumber?.trim() ?? null,
        swiftBic: data.swiftBic?.trim() ?? null,
        mobileMoneyProvider: data.mobileMoneyProvider?.trim() ?? null,
        mobileNumber: data.mobileNumber?.trim() ?? null,
      },
    });
  },

  async listByUser(userId: string) {
    return prisma.beneficiary.findMany({
      where: { userId },
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

  async update(userId: string, id: string, data: Partial<CreateBeneficiaryDto>) {
    // Confirm ownership first
    await beneficiaryService.getById(userId, id);

    return prisma.beneficiary.update({
      where: { id },
      data: {
        fullName: data.fullName?.trim(),
        country: data.country?.trim() ?? undefined,
        bankName: data.bankName?.trim() ?? undefined,
        accountNumber: data.accountNumber?.trim() ?? undefined,
        swiftBic: data.swiftBic?.trim() ?? undefined,
        mobileMoneyProvider: data.mobileMoneyProvider?.trim() ?? undefined,
        mobileNumber: data.mobileNumber?.trim() ?? undefined,
      },
    });
  },

  async delete(userId: string, id: string) {
    // Confirm ownership first
    await beneficiaryService.getById(userId, id);
    await prisma.beneficiary.delete({ where: { id } });
  },
};
