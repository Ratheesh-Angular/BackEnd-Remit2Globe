import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { beneficiaryService } from "../services/beneficiary.service";
import { DeliveryChannel } from "../generated/prisma";
import { toPublicApiErrorMessage } from "../lib/public-error-message";

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
    } catch (error: unknown) {
      const isValidation = [
        "First name",
        "Last name",
        "Country",
        "Bank name",
        "Account number",
        "SWIFT",
        "Mobile money",
        "Mobile number",
      ].some(
        (phrase) =>
          error instanceof Error && error.message?.startsWith(phrase),
      );

      return res.status(isValidation ? 400 : 500).json({
        success: false,
        message: isValidation
          ? (error as Error).message
          : toPublicApiErrorMessage(error),
      });
    }
  },

  async list(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      const q = req.query.activeOnly;
      const activeOnly = q === "true" || q === "1";
      const beneficiaries = await beneficiaryService.listByUser(userId, {
        activeOnly,
      });
      return res.status(200).json({
        success: true,
        data: { beneficiaries },
      });
    } catch (error: unknown) {
      return res.status(500).json({
        success: false,
        message: toPublicApiErrorMessage(
          error,
          "Could not load beneficiaries. Please try again.",
        ),
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
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "";
      if (msg === "Beneficiary not found") {
        return res.status(404).json({
          success: false,
          message: msg,
        });
      }
      return res.status(500).json({
        success: false,
        message: toPublicApiErrorMessage(error),
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
    } catch (error: unknown) {
      if (error instanceof Error && error.message === "Beneficiary not found") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }
      const isValidation = [
        "First name",
        "Last name",
        "Country",
        "Bank name",
        "Account number",
        "SWIFT",
        "Mobile money",
        "Mobile number",
      ].some(
        (phrase) =>
          error instanceof Error && error.message?.startsWith(phrase),
      );

      return res.status(isValidation ? 400 : 500).json({
        success: false,
        message: isValidation
          ? (error as Error).message
          : toPublicApiErrorMessage(error),
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
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "";
      if (msg === "Beneficiary not found") {
        return res.status(404).json({
          success: false,
          message: msg,
        });
      }
      return res.status(500).json({
        success: false,
        message: toPublicApiErrorMessage(error),
      });
    }
  },
};
