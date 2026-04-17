import express from "express";
import {
  getFlexTokenController,
  getFlexMD5Controller,
  testFlexProtectedAPI,
  getFlexCountriesController,
  getFlexBanksController,
  flexStkCallbackController,
} from "../controllers/flex.controller";

const router = express.Router();

router.get("/token", getFlexTokenController);
router.get("/md5", getFlexMD5Controller);
router.get("/test", testFlexProtectedAPI);
router.get("/countries", getFlexCountriesController);
router.get("/banks/:couCode", getFlexBanksController);
router.post("/stk-callback", flexStkCallbackController);
export default router;
