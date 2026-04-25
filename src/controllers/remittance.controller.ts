import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  addPaymentProofs,
  confirmTransfer,
  createDraftTransfer,
  deletePaymentProof,
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
      const transfer = await createDraftTransfer(req.user!.userId, req.body);
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
      const q = req.query;
      const pInt = (v: unknown) => {
        const n = parseInt(String(v ?? ""), 10);
        return Number.isFinite(n) ? n : undefined;
      };
      const transfers = await listMyTransfers(req.user!.userId, {
        reference: q.reference != null ? String(q.reference) : undefined,
        date: q.date != null ? String(q.date) : undefined,
        year: pInt(q.year),
        month: pInt(q.month),
        day: pInt(q.day),
        limit: pInt(q.limit),
      });
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
            ? "Transfer created. Check your phone to approve the mobile money payment prompt."
            : "Transfer created. Please use the transfer reference when making the payment to our account and upload the proof of payment.",
        data: { transfer },
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async uploadPaymentProof(req: AuthRequest, res: Response) {
    try {
      const files = req.files as Express.Multer.File[] | undefined;
      if (!files?.length) {
        return res.status(400).json({
          success: false,
          message: "No files uploaded",
        });
      }
      const proofs = await addPaymentProofs(
        req.user!.userId,
        String(req.params.id),
        files,
      );
      return res.status(201).json({ success: true, data: { proofs } });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res.status(400).json({ success: false, message: msg });
    }
  },

  async removePaymentProof(req: AuthRequest, res: Response) {
    try {
      await deletePaymentProof(
        req.user!.userId,
        String(req.params.id),
        String(req.params.proofId),
      );
      return res.json({ success: true });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return res
        .status(msg === "Payment proof not found" ? 404 : 400)
        .json({ success: false, message: msg });
    }
  },
};
