"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_api_key_middleware_1 = require("../middleware/admin-api-key.middleware");
const admin_country_controller_1 = require("../controllers/admin-country.controller");
const router = express_1.default.Router();
router.use(admin_api_key_middleware_1.requireAdminApiKey);
router.get("/flex-countries", admin_country_controller_1.getAdminFlexCountriesController);
router.get("/country-allowlist", admin_country_controller_1.getCountryAllowlistController);
router.put("/country-allowlist", admin_country_controller_1.putCountryAllowlistController);
exports.default = router;
