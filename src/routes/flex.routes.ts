import express from "express";
import {
  getFlexTokenController,
  getFlexMD5Controller,
  testFlexProtectedAPI,
  getFlexCountriesController,
} from "../controllers/flex.controller";

const router = express.Router();

router.get("/token", getFlexTokenController);
router.get("/md5", getFlexMD5Controller);
router.get("/test", testFlexProtectedAPI);
router.get("/countries", getFlexCountriesController);
export default router;
