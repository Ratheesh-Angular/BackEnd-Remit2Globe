"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kycService = void 0;
const prisma_1 = require("../lib/prisma");
const prisma_2 = require("../generated/prisma");
const s3_service_1 = require("./s3.service");
const residence_address_utils_1 = require("../utils/residence-address.utils");
const CORPORATE_DOCUMENT_TYPES_REQUIRED = [
    "CERTIFICATE_OF_INCORPORATION",
    "TRADING_LICENSE",
    "CR12",
    "PROOF_OF_ADDRESS",
    "REPRESENTATIVE_ID",
    "DIRECTOR_ID",
    "SHAREHOLDER_ID",
];
function trimStr(v) {
    return (v ?? "").trim();
}
function assertCorporateScalars(cp) {
    if (!trimStr(cp.businessName))
        throw new Error("Business name is required before submitting");
    if (!trimStr(cp.natureOfBusiness))
        throw new Error("Nature of business is required before submitting");
    if (!trimStr(cp.businessAddress))
        throw new Error("Business address is required before submitting");
    if (!trimStr(cp.registrationNumber))
        throw new Error("Business registration number is required before submitting");
    if (!cp.incorporationDate)
        throw new Error("Date of incorporation is required before submitting");
    if (!trimStr(cp.tradingLicenseNumber))
        throw new Error("Trading license number is required before submitting");
    if (!cp.tradingLicenseIssue)
        throw new Error("Trading license issue date is required before submitting");
    if (!cp.tradingLicenseExpiry)
        throw new Error("Trading license expiry is required before submitting");
    const needsRegulatory = Boolean(trimStr(cp.regulatoryLicenseNumber));
    if (needsRegulatory) {
        if (!cp.regulatoryLicenseIssue)
            throw new Error("Regulatory license issue date is required when a regulatory license number is provided");
        if (!cp.regulatoryLicenseExpiry)
            throw new Error("Regulatory license expiry is required when a regulatory license number is provided");
    }
}
function assertCorporateKeyPersonnelAndShareholders(cp) {
    const kp = cp.keyPersonnel;
    if (!Array.isArray(kp) || kp.length === 0) {
        throw new Error("Add at least one key person before submitting");
    }
    const kpOk = kp.some((row) => {
        if (!row || typeof row !== "object")
            return false;
        const o = row;
        const name = trimStr(String(o.fullName ?? ""));
        const id = trimStr(String(o.passportOrNationalId ?? o.passportOrNationalID ?? ""));
        return Boolean(name && id);
    });
    if (!kpOk) {
        throw new Error("Each key person must include full name and passport or national ID number");
    }
    const sh = cp.shareholders;
    if (!Array.isArray(sh) || sh.length === 0) {
        throw new Error("Add at least one shareholder before submitting");
    }
    for (const row of sh) {
        if (!row || typeof row !== "object") {
            throw new Error("Invalid shareholder data");
        }
        const o = row;
        const kind = o.kind === "CORPORATE" ? "CORPORATE" : "INDIVIDUAL";
        if (kind === "CORPORATE") {
            const en = trimStr(String(o.entityName ?? o.businessName ?? ""));
            const rn = trimStr(String(o.registrationNumber ?? ""));
            const addr = trimStr(String(o.registeredAddress ?? o.address ?? ""));
            if (!en || !rn || !addr) {
                throw new Error("Corporate shareholders must include entity name, registration number, and registered address");
            }
        }
        else {
            const fn = trimStr(String(o.fullName ?? ""));
            const idn = trimStr(String(o.idDocumentNumber ?? o.passportOrNationalId ?? ""));
            if (!fn || !idn) {
                throw new Error("Individual shareholders must include full name and ID document number");
            }
        }
    }
}
function assertCorporateDocumentsUploaded(docs, cp) {
    const uploaded = new Set(docs.map((d) => d.documentType));
    for (const dt of CORPORATE_DOCUMENT_TYPES_REQUIRED) {
        if (!uploaded.has(dt)) {
            throw new Error(`Missing required document: ${dt.replace(/_/g, " ").toLowerCase()}`);
        }
    }
    if (trimStr(cp.regulatoryLicenseNumber) && !uploaded.has("REGULATORY_LICENSE")) {
        throw new Error("Regulatory license document upload is required when a regulatory license number is provided");
    }
}
exports.kycService = {
    async saveIndividualProfile(userId, data) {
        // Construct fullName from firstName, middleName, lastName
        const fullName = [data.firstName, data.middleName, data.lastName]
            .filter(Boolean)
            .join(" ")
            .trim();
        const addr = (0, residence_address_utils_1.parseResidenceForDb)(data);
        // upsert = update if exists, create if not
        const profile = await prisma_1.prisma.individualProfile.upsert({
            where: { userId },
            update: {
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                fullName: fullName || null,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
                nationality: data.nationality ?? null,
                isNational: data.isNational || false,
                passportNumber: data.passportNumber,
                passportIssuingCountry: data.passportIssuingCountry || null,
                passportIssue: data.passportIssue ? new Date(data.passportIssue) : null,
                passportExpiry: data.passportExpiry
                    ? new Date(data.passportExpiry)
                    : null,
                citizenPrimaryDocumentType: data.citizenPrimaryDocumentType || null,
                workPermitNumber: data.workPermitNumber,
                workPermitIssue: data.workPermitIssue
                    ? new Date(data.workPermitIssue)
                    : null,
                workPermitExpiry: data.workPermitExpiry
                    ? new Date(data.workPermitExpiry)
                    : null,
                nationalIdNumber: data.nationalIdNumber,
                nationalIdIssuingCountry: data.nationalIdIssuingCountry || null,
                nationalIdIssue: data.nationalIdIssue
                    ? new Date(data.nationalIdIssue)
                    : null,
                nationalIdExpiry: data.nationalIdExpiry
                    ? new Date(data.nationalIdExpiry)
                    : null,
                residenceAddress: addr.residenceAddress === null
                    ? prisma_2.Prisma.DbNull
                    : addr.residenceAddress,
                residentialAddress: addr.residentialAddress,
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
                nationality: data.nationality ?? null,
                isNational: data.isNational || false,
                passportNumber: data.passportNumber,
                passportIssuingCountry: data.passportIssuingCountry || null,
                passportIssue: data.passportIssue ? new Date(data.passportIssue) : null,
                passportExpiry: data.passportExpiry
                    ? new Date(data.passportExpiry)
                    : null,
                citizenPrimaryDocumentType: data.citizenPrimaryDocumentType || null,
                workPermitNumber: data.workPermitNumber,
                workPermitIssue: data.workPermitIssue
                    ? new Date(data.workPermitIssue)
                    : null,
                workPermitExpiry: data.workPermitExpiry
                    ? new Date(data.workPermitExpiry)
                    : null,
                nationalIdNumber: data.nationalIdNumber,
                nationalIdIssuingCountry: data.nationalIdIssuingCountry || null,
                nationalIdIssue: data.nationalIdIssue
                    ? new Date(data.nationalIdIssue)
                    : null,
                nationalIdExpiry: data.nationalIdExpiry
                    ? new Date(data.nationalIdExpiry)
                    : null,
                residenceAddress: addr.residenceAddress === null
                    ? prisma_2.Prisma.DbNull
                    : addr.residenceAddress,
                residentialAddress: addr.residentialAddress,
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
        if (!user)
            return null;
        const { passwordHash: _p, ...safe } = user;
        return safe;
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
        if (user.role === "CORPORATE" && user.corporateProfile) {
            assertCorporateScalars(user.corporateProfile);
            assertCorporateKeyPersonnelAndShareholders(user.corporateProfile);
            assertCorporateDocumentsUploaded(user.documents, user.corporateProfile);
        }
        if (user.role === "INDIVIDUAL" && user.documents.length === 0) {
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
