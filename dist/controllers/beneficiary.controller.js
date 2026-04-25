"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beneficiaryController = void 0;
const beneficiary_service_1 = require("../services/beneficiary.service");
const VALID_CHANNELS = ["BANK_TRANSFER", "MOBILE_MONEY"];
exports.beneficiaryController = {
    async create(req, res) {
        try {
            const userId = req.user.userId;
            const { deliveryChannel } = req.body;
            if (!deliveryChannel || !VALID_CHANNELS.includes(deliveryChannel)) {
                return res.status(400).json({
                    success: false,
                    message: "deliveryChannel must be BANK_TRANSFER or MOBILE_MONEY",
                });
            }
            const beneficiary = await beneficiary_service_1.beneficiaryService.create(userId, req.body);
            return res.status(201).json({
                success: true,
                message: "Beneficiary added successfully",
                data: { beneficiary },
            });
        }
        catch (error) {
            const isValidation = [
                "First name",
                "Last name",
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
    async list(req, res) {
        try {
            const userId = req.user.userId;
            const q = req.query.activeOnly;
            const activeOnly = q === "true" || q === "1";
            const beneficiaries = await beneficiary_service_1.beneficiaryService.listByUser(userId, {
                activeOnly,
            });
            return res.status(200).json({
                success: true,
                data: { beneficiaries },
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async getOne(req, res) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            const beneficiary = await beneficiary_service_1.beneficiaryService.getById(userId, id);
            return res.status(200).json({
                success: true,
                data: { beneficiary },
            });
        }
        catch (error) {
            return res.status(error.message === "Beneficiary not found" ? 404 : 500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async update(req, res) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            const beneficiary = await beneficiary_service_1.beneficiaryService.update(userId, id, req.body);
            return res.status(200).json({
                success: true,
                message: "Beneficiary updated successfully",
                data: { beneficiary },
            });
        }
        catch (error) {
            if (error.message === "Beneficiary not found") {
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
            ].some((phrase) => error.message?.startsWith(phrase));
            return res.status(isValidation ? 400 : 500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
    async remove(req, res) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await beneficiary_service_1.beneficiaryService.delete(userId, id);
            return res.status(200).json({
                success: true,
                message: "Beneficiary removed successfully",
            });
        }
        catch (error) {
            return res.status(error.message === "Beneficiary not found" ? 404 : 500).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    },
};
