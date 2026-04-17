"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kyc_controller_1 = require("../controllers/kyc.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
// All KYC routes require login
router.use(auth_middleware_1.protect);
router.post("/individual/profile", kyc_controller_1.kycController.saveIndividualProfile);
router.post("/corporate/profile", kyc_controller_1.kycController.saveCorporateProfile);
router.get("/profile", kyc_controller_1.kycController.getMyProfile);
router.post("/submit", kyc_controller_1.kycController.submitKyc);
router.post("/documents/upload", upload_middleware_1.upload.single("file"), kyc_controller_1.kycController.uploadDocument);
exports.default = router;
