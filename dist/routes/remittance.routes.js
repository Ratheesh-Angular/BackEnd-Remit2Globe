"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const upload_middleware_1 = require("../middleware/upload.middleware");
const remittance_controller_1 = require("../controllers/remittance.controller");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.protect);
function paymentProofUploadMiddleware(req, res, next) {
    upload_middleware_1.uploadPaymentProof.array("files", 15)(req, res, (err) => {
        if (err) {
            const msg = err instanceof Error ? err.message : "Upload error";
            return res.status(400).json({ success: false, message: msg });
        }
        next();
    });
}
router.get("/context", remittance_controller_1.remittanceController.context);
router.get("/lookups", remittance_controller_1.remittanceController.lookups);
router.get("/quote", remittance_controller_1.remittanceController.quote);
router.get("/company-accounts", remittance_controller_1.remittanceController.companyAccounts);
router.get("/transfers", remittance_controller_1.remittanceController.listTransfers);
router.post("/transfers", remittance_controller_1.remittanceController.createTransfer);
router.get("/transfers/:id", remittance_controller_1.remittanceController.getTransfer);
router.patch("/transfers/:id", remittance_controller_1.remittanceController.patchTransfer);
router.post("/transfers/:id/confirm", remittance_controller_1.remittanceController.confirm);
router.post("/transfers/:id/payment-proof", paymentProofUploadMiddleware, remittance_controller_1.remittanceController.uploadPaymentProof);
router.delete("/transfers/:id/payment-proof/:proofId", remittance_controller_1.remittanceController.removePaymentProof);
exports.default = router;
