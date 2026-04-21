import { NextFunction, Request, Response, Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { uploadPaymentProof } from "../middleware/upload.middleware";
import { remittanceController } from "../controllers/remittance.controller";

const router = Router();
router.use(protect);

function paymentProofUploadMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  uploadPaymentProof.array("files", 15)(req, res, (err: unknown) => {
    if (err) {
      const msg = err instanceof Error ? err.message : "Upload error";
      return res.status(400).json({ success: false, message: msg });
    }
    next();
  });
}

router.get("/context", remittanceController.context);
router.get("/lookups", remittanceController.lookups);
router.get("/quote", remittanceController.quote);
router.get("/company-accounts", remittanceController.companyAccounts);
router.get("/transfers", remittanceController.listTransfers);
router.post("/transfers", remittanceController.createTransfer);
router.get("/transfers/:id", remittanceController.getTransfer);
router.patch("/transfers/:id", remittanceController.patchTransfer);
router.post("/transfers/:id/confirm", remittanceController.confirm);
router.post(
  "/transfers/:id/payment-proof",
  paymentProofUploadMiddleware,
  remittanceController.uploadPaymentProof,
);
router.delete(
  "/transfers/:id/payment-proof/:proofId",
  remittanceController.removePaymentProof,
);

export default router;
