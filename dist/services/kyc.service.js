"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kycService = void 0;
const prisma_1 = require("../lib/prisma");
const s3_service_1 = require("./s3.service");
exports.kycService = {
    async saveIndividualProfile(userId, data) {
        // Construct fullName from firstName, middleName, lastName
        const fullName = [data.firstName, data.middleName, data.lastName]
            .filter(Boolean)
            .join(" ")
            .trim();
        // upsert = update if exists, create if not
        const profile = await prisma_1.prisma.individualProfile.upsert({
            where: { userId },
            update: {
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                fullName: fullName || null,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
                nationality: data.nationality,
                isNational: data.isNational || false,
                passportNumber: data.passportNumber,
                passportIssue: data.passportIssue ? new Date(data.passportIssue) : null,
                passportExpiry: data.passportExpiry
                    ? new Date(data.passportExpiry)
                    : null,
                workPermitNumber: data.workPermitNumber,
                workPermitIssue: data.workPermitIssue
                    ? new Date(data.workPermitIssue)
                    : null,
                workPermitExpiry: data.workPermitExpiry
                    ? new Date(data.workPermitExpiry)
                    : null,
                nationalIdNumber: data.nationalIdNumber,
                nationalIdIssue: data.nationalIdIssue
                    ? new Date(data.nationalIdIssue)
                    : null,
                nationalIdExpiry: data.nationalIdExpiry
                    ? new Date(data.nationalIdExpiry)
                    : null,
                residentialAddress: data.residentialAddress,
                country: data.country,
                contactEmail: data.contactEmail,
                contactPhone: data.contactPhone,
                occupation: data.occupation,
                employerName: data.employerName,
            },
            create: {
                userId,
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                fullName: fullName || null,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
                nationality: data.nationality,
                isNational: data.isNational || false,
                passportNumber: data.passportNumber,
                passportIssue: data.passportIssue ? new Date(data.passportIssue) : null,
                passportExpiry: data.passportExpiry
                    ? new Date(data.passportExpiry)
                    : null,
                workPermitNumber: data.workPermitNumber,
                workPermitIssue: data.workPermitIssue
                    ? new Date(data.workPermitIssue)
                    : null,
                workPermitExpiry: data.workPermitExpiry
                    ? new Date(data.workPermitExpiry)
                    : null,
                nationalIdNumber: data.nationalIdNumber,
                nationalIdIssue: data.nationalIdIssue
                    ? new Date(data.nationalIdIssue)
                    : null,
                nationalIdExpiry: data.nationalIdExpiry
                    ? new Date(data.nationalIdExpiry)
                    : null,
                residentialAddress: data.residentialAddress,
                country: data.country,
                contactEmail: data.contactEmail,
                contactPhone: data.contactPhone,
                occupation: data.occupation,
                employerName: data.employerName,
            },
        });
        return profile;
    },
    async saveCorporateProfile(userId, data) {
        const profile = await prisma_1.prisma.corporateProfile.upsert({
            where: { userId },
            update: {
                businessName: data.businessName,
                natureOfBusiness: data.natureOfBusiness,
                businessAddress: data.businessAddress,
                registrationNumber: data.registrationNumber,
                incorporationDate: data.incorporationDate
                    ? new Date(data.incorporationDate)
                    : null,
                tradingLicenseNumber: data.tradingLicenseNumber,
                tradingLicenseIssue: data.tradingLicenseIssue
                    ? new Date(data.tradingLicenseIssue)
                    : null,
                tradingLicenseExpiry: data.tradingLicenseExpiry
                    ? new Date(data.tradingLicenseExpiry)
                    : null,
                regulatoryLicenseNumber: data.regulatoryLicenseNumber,
                regulatoryLicenseIssue: data.regulatoryLicenseIssue
                    ? new Date(data.regulatoryLicenseIssue)
                    : null,
                regulatoryLicenseExpiry: data.regulatoryLicenseExpiry
                    ? new Date(data.regulatoryLicenseExpiry)
                    : null,
                keyPersonnel: data.keyPersonnel || [],
                shareholders: data.shareholders || [],
            },
            create: {
                userId,
                businessName: data.businessName,
                natureOfBusiness: data.natureOfBusiness,
                businessAddress: data.businessAddress,
                registrationNumber: data.registrationNumber,
                incorporationDate: data.incorporationDate
                    ? new Date(data.incorporationDate)
                    : null,
                tradingLicenseNumber: data.tradingLicenseNumber,
                tradingLicenseIssue: data.tradingLicenseIssue
                    ? new Date(data.tradingLicenseIssue)
                    : null,
                tradingLicenseExpiry: data.tradingLicenseExpiry
                    ? new Date(data.tradingLicenseExpiry)
                    : null,
                regulatoryLicenseNumber: data.regulatoryLicenseNumber,
                regulatoryLicenseIssue: data.regulatoryLicenseIssue
                    ? new Date(data.regulatoryLicenseIssue)
                    : null,
                regulatoryLicenseExpiry: data.regulatoryLicenseExpiry
                    ? new Date(data.regulatoryLicenseExpiry)
                    : null,
                keyPersonnel: data.keyPersonnel || [],
                shareholders: data.shareholders || [],
            },
        });
        return profile;
    },
    async getMyProfile(userId) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            include: {
                individualProfile: true,
                corporateProfile: true,
                documents: true,
            },
        });
        return user;
    },
    async submitKyc(userId) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            include: {
                individualProfile: true,
                corporateProfile: true,
                documents: true,
            },
        });
        if (!user)
            throw new Error("User not found");
        if (user.kycStatus === "SUBMITTED" || user.kycStatus === "APPROVED") {
            throw new Error("KYC already submitted");
        }
        // Check profile exists
        if (user.role === "INDIVIDUAL" && !user.individualProfile) {
            throw new Error("Please complete your profile before submitting");
        }
        if (user.role === "CORPORATE" && !user.corporateProfile) {
            throw new Error("Please complete your business profile before submitting");
        }
        // Check at least one document uploaded
        if (user.documents.length === 0) {
            throw new Error("Please upload at least one document before submitting");
        }
        // Update status to SUBMITTED
        await prisma_1.prisma.user.update({
            where: { id: userId },
            data: { kycStatus: "SUBMITTED" },
        });
    },
    async saveDocument(userId, data) {
        // Check if same document type already uploaded
        const existing = await prisma_1.prisma.kycDocument.findFirst({
            where: { userId, documentType: data.documentType },
        });
        if (existing) {
            // Delete old file from S3 first
            try {
                const oldKey = existing.fileUrl.split(".amazonaws.com/")[1];
                if (oldKey)
                    await s3_service_1.s3Service.deleteFile(oldKey);
            }
            catch (e) {
                console.error("Failed to delete old S3 file:", e);
            }
            return prisma_1.prisma.kycDocument.update({
                where: { id: existing.id },
                data: {
                    fileName: data.fileName,
                    fileUrl: data.fileUrl,
                    fileSize: data.fileSize,
                    mimeType: data.mimeType,
                    status: "PENDING",
                    uploadedAt: new Date(),
                },
            });
        }
        return prisma_1.prisma.kycDocument.create({
            data: {
                userId,
                documentType: data.documentType,
                fileName: data.fileName,
                fileUrl: data.fileUrl,
                fileSize: data.fileSize,
                mimeType: data.mimeType,
            },
        });
    },
};
