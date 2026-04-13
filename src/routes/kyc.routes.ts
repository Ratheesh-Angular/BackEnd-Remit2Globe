import { Router } from "express";
import { kycController } from "../controllers/kyc.controller";
import { protect } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

// All KYC routes require login
router.use(protect);

router.post("/individual/profile", kycController.saveIndividualProfile);
router.post("/corporate/profile", kycController.saveCorporateProfile);
router.get("/profile", kycController.getMyProfile);
router.post("/submit", kycController.submitKyc);
router.post("/documents/upload", upload.single("file"), kycController.uploadDocument);

export default router;
