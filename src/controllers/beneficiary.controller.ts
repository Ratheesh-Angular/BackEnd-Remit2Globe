import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { beneficiaryService } from "../services/beneficiary.service";
import { DeliveryChannel } from "../generated/prisma";

const VALID_CHANNELS: DeliveryChannel[] = ["BANK_TRANSFER", "MOBILE_MONEY"];

export const beneficiaryController = {
  async create(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const { deliveryChannel } = req.body;

      if (!deliveryChannel || !VALID_CHANNELS.includes(deliveryChannel)) {
        return res.status(400).json({
          success: false,
          message: "deliveryChannel must be BANK_TRANSFER or MOBILE_MONEY",
        });
      }

      const beneficiary = await beneficiaryService.create(userId, req.body);
      return res.status(201).json({
        success: true,
        message: "Beneficiary added successfully",
        data: { beneficiary },
      });
    } catch (error: any) {
      const isValidation = [
        "Full name",
        "Country",
        "Bank name",
        "Account number",
        "SWIFT",
        "Mobile money",
        "Mobile number",
      ].some((phrase) => error.message?.startsWith(phrase));

      return res.status(isValidation ? 400 : 500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async list(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const beneficiaries = await beneficiaryService.listByUser(userId);
      return res.status(200).json({
        success: true,
        data: { beneficiaries },
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async getOne(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      const beneficiary = await beneficiaryService.getById(userId, id);
      return res.status(200).json({
        success: true,
        data: { beneficiary },
      });
    } catch (error: any) {
      return res.status(error.message === "Beneficiary not found" ? 404 : 500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async update(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      const beneficiary = await beneficiaryService.update(userId, id, req.body);
      return res.status(200).json({
        success: true,
        message: "Beneficiary updated successfully",
        data: { beneficiary },
      });
    } catch (error: any) {
      return res.status(error.message === "Beneficiary not found" ? 404 : 500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },

  async remove(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      await beneficiaryService.delete(userId, id);
      return res.status(200).json({
        success: true,
        message: "Beneficiary removed successfully",
      });
    } catch (error: any) {
      return res.status(error.message === "Beneficiary not found" ? 404 : 500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  },
};
