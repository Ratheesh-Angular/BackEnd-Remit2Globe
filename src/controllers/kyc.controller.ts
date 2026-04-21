import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { kycService } from "../services/kyc.service";
import { s3Service } from "../services/s3.service";

export const kycController = {
  async saveIndividualProfile(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const profile = await kycService.saveIndividualProfile(userId, req.body);
      return res.status(200).json({
        success: true,
        message: "Profile saved successfully",
        data: { profile },
      });
    } catch (error: any) {
      console.error("Save individual profile error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async saveCorporateProfile(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const profile = await kycService.saveCorporateProfile(userId, req.body);
      return res.status(200).json({
        success: true,
        message: "Profile saved successfully",
        data: { profile },
      });
    } catch (error: any) {
      console.error("Save corporate profile error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async getMyProfile(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const data = await kycService.getMyProfile(userId);
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  },

  async submitKyc(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      await kycService.submitKyc(userId);
      return res.status(200).json({
        success: true,
        message:
          "KYC submitted successfully. We will review your application shortly.",
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async uploadDocument(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
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
      const { fileUrl, fileKey } = await s3Service.uploadFile(
        file.buffer,
        file.originalname,
        file.mimetype,
        userId,
        documentType,
      );

      // Save record to database
      const doc = await kycService.saveDocument(userId, {
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
    } catch (error: any) {
      console.error("Upload error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Upload failed",
      });
    }
  },
};
