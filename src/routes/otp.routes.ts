import { Router } from "express";
import { otpController } from "../controllers/otp.controller";

const router = Router();

router.post("/verify-email", otpController.verifyEmailOtp);
router.post("/verify-phone", otpController.verifyPhoneOtp);
router.post("/resend", otpController.resendOtp);
router.get("/status/:userId", otpController.getVerificationStatus);

export default router;
