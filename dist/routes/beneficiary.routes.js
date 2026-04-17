"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beneficiary_controller_1 = require("../controllers/beneficiary.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// All beneficiary routes require login
router.use(auth_middleware_1.protect);
router.get("/", beneficiary_controller_1.beneficiaryController.list);
router.post("/", beneficiary_controller_1.beneficiaryController.create);
router.get("/:id", beneficiary_controller_1.beneficiaryController.getOne);
router.patch("/:id", beneficiary_controller_1.beneficiaryController.update);
router.delete("/:id", beneficiary_controller_1.beneficiaryController.remove);
exports.default = router;
