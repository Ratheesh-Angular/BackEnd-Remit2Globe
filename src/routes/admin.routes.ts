import express from "express";
import { requireAdminApiKey } from "../middleware/admin-api-key.middleware";
import {
  getAdminFlexCountriesController,
  getCountryAllowlistController,
  putCountryAllowlistController,
} from "../controllers/admin-country.controller";

const router = express.Router();

router.use(requireAdminApiKey);

router.get("/flex-countries", getAdminFlexCountriesController);
router.get("/country-allowlist", getCountryAllowlistController);
router.put("/country-allowlist", putCountryAllowlistController);

export default router;
