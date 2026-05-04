import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";
const router = Router();

router.post(
  "/internal/trusted-session",
  authController.trustedIssueSession,
);
router.post("/register", authController.register);
router.post("/set-password", authController.setPassword);
router.post("/login", authController.login);
router.get("/me", protect, authController.getMe);
router.post("/change-password", protect, authController.changePassword);
router.post("/logout", protect, authController.logout);
export default router;
