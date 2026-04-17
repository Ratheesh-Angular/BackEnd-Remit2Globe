"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kycController = void 0;
const kyc_service_1 = require("../services/kyc.service");
const s3_service_1 = require("../services/s3.service");
exports.kycController = {
    async saveIndividualProfile(req, res) {
        try {
            const userId = req.user.userId;
            const profile = await kyc_service_1.kycService.saveIndividualProfile(userId, req.body);
            return res.status(200).json({
                success: true,
                message: "Profile saved successfully",
                data: { profile },
            });
        }
        catch (error) {
            console.error("Save individual profile error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async saveCorporateProfile(req, res) {
        try {
            const userId = req.user.userId;
            const profile = await kyc_service_1.kycService.saveCorporateProfile(userId, req.body);
            return res.status(200).json({
                success: true,
                message: "Profile saved successfully",
                data: { profile },
            });
        }
        catch (error) {
            console.error("Save corporate profile error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async getMyProfile(req, res) {
        try {
            const userId = req.user.userId;
            const data = await kyc_service_1.kycService.getMyProfile(userId);
            return res.status(200).json({
                success: true,
                data,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    },
    async submitKyc(req, res) {
        try {
            const userId = req.user.userId;
            await kyc_service_1.kycService.submitKyc(userId);
            return res.status(200).json({
                success: true,
                message: "KYC submitted successfully. We will review your application shortly.",
            });
        }
        catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async uploadDocument(req, res) {
        try {
            const userId = req.user.userId;
            const { documentType } = req.body;
            const file = req.file;
            if (!file) {
                return res.status(400).json({
                    success: false,
                    message: "No file uploaded",
                });
            }
            if (!documentType) {
                return res.status(400).json({
                    success: false,
                    message: "Document type is required",
                });
            }
            // Upload to S3
            const { fileUrl, fileKey } = await s3_service_1.s3Service.uploadFile(file.buffer, file.originalname, file.mimetype, userId, documentType);
            // Save record to database
            const doc = await kyc_service_1.kycService.saveDocument(userId, {
                documentType,
                fileName: file.originalname,
                fileUrl,
                fileKey,
                fileSize: file.size,
                mimeType: file.mimetype,
            });
            return res.status(200).json({
                success: true,
                message: "Document uploaded successfully",
                data: {
                    fileUrl: doc.fileUrl,
                    fileName: doc.fileName,
                },
            });
        }
        catch (error) {
            console.error("Upload error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Upload failed",
            });
        }
    },
};
