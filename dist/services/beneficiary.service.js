"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beneficiaryService = void 0;
const prisma_1 = require("../lib/prisma");
function validateBeneficiaryData(data) {
    if (!data.fullName?.trim()) {
        throw new Error("Full name is required");
    }
    if (data.deliveryChannel === "BANK_TRANSFER") {
        if (!data.country?.trim())
            throw new Error("Country is required for bank transfers");
        if (!data.bankName?.trim())
            throw new Error("Bank name is required");
        if (!data.accountNumber?.trim())
            throw new Error("Account number / IBAN is required");
        if (!data.swiftBic?.trim())
            throw new Error("SWIFT/BIC code is required");
    }
    if (data.deliveryChannel === "MOBILE_MONEY") {
        if (!data.country?.trim())
            throw new Error("Country is required for mobile money transfers");
        if (!data.mobileMoneyProvider?.trim())
            throw new Error("Mobile money provider is required");
        if (!data.mobileNumber?.trim())
            throw new Error("Mobile number is required");
    }
}
exports.beneficiaryService = {
    async create(userId, data) {
        validateBeneficiaryData(data);
        return prisma_1.prisma.beneficiary.create({
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
    async listByUser(userId) {
        return prisma_1.prisma.beneficiary.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });
    },
    async getById(userId, id) {
        const beneficiary = await prisma_1.prisma.beneficiary.findFirst({
            where: { id, userId },
        });
        if (!beneficiary)
            throw new Error("Beneficiary not found");
        return beneficiary;
    },
    async update(userId, id, data) {
        // Confirm ownership first
        await exports.beneficiaryService.getById(userId, id);
        return prisma_1.prisma.beneficiary.update({
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
    async delete(userId, id) {
        // Confirm ownership first
        await exports.beneficiaryService.getById(userId, id);
        await prisma_1.prisma.beneficiary.delete({ where: { id } });
    },
};
