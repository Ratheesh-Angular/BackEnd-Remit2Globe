import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  confirmTransfer,
  createDraftTransfer,
  getQuote,
  getSenderContext,
  getTransferForUser,
  listCompanyAccounts,
  listMyTransfers,
  updateTransferStep,
} from "../services/remittance.service";
import {
  RELATIONSHIP_OPTIONS,
  SOURCE_OF_INCOME_OPTIONS,
  TRANSFER_PURPOSE_OPTIONS,
} from "../constants/remittance.constants";

export const remittanceController = {
  async context(req: AuthRequest, res: Response) {
    try {
      const data = await getSenderContext(req.user!.userId);
      return res.json({ success: true, data });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async lookups(_req: AuthRequest, res: Response) {
    return res.json({
      success: true,
      data: {
        sourceOfIncome: SOURCE_OF_INCOME_OPTIONS,
        transferPurpose: TRANSFER_PURPOSE_OPTIONS,
        relationship: RELATIONSHIP_OPTIONS,
      },
    });
  },

  async quote(req: AuthRequest, res: Response) {
    try {
      const fromCurrency = String(req.query.fromCurrency ?? "");
      const toCurrency = String(req.query.toCurrency ?? "");
      const payAmount = Number(req.query.payAmount);
      const data = await getQuote({ fromCurrency, toCurrency, payAmount });
      return res.json({ success: true, data });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async companyAccounts(req: AuthRequest, res: Response) {
    try {
      const currency = req.query.currency
        ? String(req.query.currency)
        : undefined;
      const accounts = await listCompanyAccounts(currency);
      return res.json({ success: true, data: { accounts } });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(500).json({ success: false, message: msg });
    }
  },

  async createTransfer(req: AuthRequest, res: Response) {
    try {
      const transfer = await createDraftTransfer(
        req.user!.userId,
        req.body,
      );
      return res.status(201).json({
        success: true,
        message: "Draft saved",
        data: { transfer },
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async listTransfers(req: AuthRequest, res: Response) {
    try {
      const transfers = await listMyTransfers(req.user!.userId);
      return res.json({ success: true, data: { transfers } });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(500).json({ success: false, message: msg });
    }
  },

  async getTransfer(req: AuthRequest, res: Response) {
    try {
      const transfer = await getTransferForUser(
        req.user!.userId,
        String(req.params.id),
      );
      return res.json({ success: true, data: { transfer } });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res
        .status(msg === "Transfer not found" ? 404 : 400)
        .json({ success: false, message: msg });
    }
  },

  async patchTransfer(req: AuthRequest, res: Response) {
    try {
      const step = Number(req.body.step);
      if (![2, 3, 4].includes(step)) {
        return res.status(400).json({
          success: false,
          message: "step must be 2, 3, or 4",
        });
      }
      const transfer = await updateTransferStep(
        req.user!.userId,
        String(req.params.id),
        step,
        req.body,
      );
      return res.json({ success: true, data: { transfer } });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async confirm(req: AuthRequest, res: Response) {
    try {
      const transfer = await confirmTransfer(
        req.user!.userId,
        String(req.params.id),
      );
      return res.json({
        success: true,
        message:
          transfer.payInMethod === "MOBILE_MONEY"
            ? "Transfer created. Check your phone to approve the mobile money payment prompt (STK)."
            : "Transfer created. Use your reference when paying from your bank, then upload proof when prompted.",
        data: { transfer },
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },
};
