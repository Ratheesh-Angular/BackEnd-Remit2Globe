"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remittanceController = void 0;
const remittance_service_1 = require("../services/remittance.service");
const remittance_constants_1 = require("../constants/remittance.constants");
exports.remittanceController = {
    async context(req, res) {
        try {
            const data = await (0, remittance_service_1.getSenderContext)(req.user.userId);
            return res.json({ success: true, data });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async lookups(_req, res) {
        return res.json({
            success: true,
            data: {
                sourceOfIncome: remittance_constants_1.SOURCE_OF_INCOME_OPTIONS,
                transferPurpose: remittance_constants_1.TRANSFER_PURPOSE_OPTIONS,
                relationship: remittance_constants_1.RELATIONSHIP_OPTIONS,
            },
        });
    },
    async quote(req, res) {
        try {
            const fromCurrency = String(req.query.fromCurrency ?? "");
            const toCurrency = String(req.query.toCurrency ?? "");
            const payAmount = Number(req.query.payAmount);
            const data = await (0, remittance_service_1.getQuote)({ fromCurrency, toCurrency, payAmount });
            return res.json({ success: true, data });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async companyAccounts(req, res) {
        try {
            const currency = req.query.currency
                ? String(req.query.currency)
                : undefined;
            const accounts = await (0, remittance_service_1.listCompanyAccounts)(currency);
            return res.json({ success: true, data: { accounts } });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(500).json({ success: false, message: msg });
        }
    },
    async createTransfer(req, res) {
        try {
            const transfer = await (0, remittance_service_1.createDraftTransfer)(req.user.userId, req.body);
            return res.status(201).json({
                success: true,
                message: "Draft saved",
                data: { transfer },
            });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async listTransfers(req, res) {
        try {
            const q = req.query;
            const pInt = (v) => {
                const n = parseInt(String(v ?? ""), 10);
                return Number.isFinite(n) ? n : undefined;
            };
            const transfers = await (0, remittance_service_1.listMyTransfers)(req.user.userId, {
                reference: q.reference != null ? String(q.reference) : undefined,
                date: q.date != null ? String(q.date) : undefined,
                year: pInt(q.year),
                month: pInt(q.month),
                day: pInt(q.day),
                limit: pInt(q.limit),
            });
            return res.json({ success: true, data: { transfers } });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(500).json({ success: false, message: msg });
        }
    },
    async getTransfer(req, res) {
        try {
            const transfer = await (0, remittance_service_1.getTransferForUser)(req.user.userId, String(req.params.id));
            return res.json({ success: true, data: { transfer } });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res
                .status(msg === "Transfer not found" ? 404 : 400)
                .json({ success: false, message: msg });
        }
    },
    async patchTransfer(req, res) {
        try {
            const step = Number(req.body.step);
            if (![2, 3, 4].includes(step)) {
                return res.status(400).json({
                    success: false,
                    message: "step must be 2, 3, or 4",
                });
            }
            const transfer = await (0, remittance_service_1.updateTransferStep)(req.user.userId, String(req.params.id), step, req.body);
            return res.json({ success: true, data: { transfer } });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async confirm(req, res) {
        try {
            const transfer = await (0, remittance_service_1.confirmTransfer)(req.user.userId, String(req.params.id));
            return res.json({
                success: true,
                message: transfer.payInMethod === "MOBILE_MONEY"
                    ? "Transfer created. Check your phone to approve the mobile money payment prompt."
                    : "Transfer created. Please use the transfer reference when making the payment to our account and upload the proof of payment.",
                data: { transfer },
            });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async uploadPaymentProof(req, res) {
        try {
            const files = req.files;
            if (!files?.length) {
                return res.status(400).json({
                    success: false,
                    message: "No files uploaded",
                });
            }
            const proofs = await (0, remittance_service_1.addPaymentProofs)(req.user.userId, String(req.params.id), files);
            return res.status(201).json({ success: true, data: { proofs } });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res.status(400).json({ success: false, message: msg });
        }
    },
    async removePaymentProof(req, res) {
        try {
            await (0, remittance_service_1.deletePaymentProof)(req.user.userId, String(req.params.id), String(req.params.proofId));
            return res.json({ success: true });
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : "Error";
            return res
                .status(msg === "Payment proof not found" ? 404 : 400)
                .json({ success: false, message: msg });
        }
    },
};
