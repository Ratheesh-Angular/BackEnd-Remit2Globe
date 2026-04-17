"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flex_controller_1 = require("../controllers/flex.controller");
const router = express_1.default.Router();
router.get("/token", flex_controller_1.getFlexTokenController);
router.get("/md5", flex_controller_1.getFlexMD5Controller);
router.get("/test", flex_controller_1.testFlexProtectedAPI);
router.get("/countries", flex_controller_1.getFlexCountriesController);
router.get("/banks/:couCode", flex_controller_1.getFlexBanksController);
router.post("/stk-callback", flex_controller_1.flexStkCallbackController);
exports.default = router;
