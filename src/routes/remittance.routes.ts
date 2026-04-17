import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { remittanceController } from "../controllers/remittance.controller";

const router = Router();
router.use(protect);

router.get("/context", remittanceController.context);
router.get("/lookups", remittanceController.lookups);
router.get("/quote", remittanceController.quote);
router.get("/company-accounts", remittanceController.companyAccounts);
router.get("/transfers", remittanceController.listTransfers);
router.post("/transfers", remittanceController.createTransfer);
router.get("/transfers/:id", remittanceController.getTransfer);
router.patch("/transfers/:id", remittanceController.patchTransfer);
router.post("/transfers/:id/confirm", remittanceController.confirm);

export default router;
