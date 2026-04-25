"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexStkCallbackController = exports.getFlexBanksController = exports.getFlexCountriesController = exports.testFlexProtectedAPI = exports.getFlexMD5Controller = exports.getFlexTokenController = void 0;
const flex_client_1 = require("../integrations/flex/flex.client");
const flex_service_1 = require("../integrations/flex/flex.service");
const flex_service_2 = require("../integrations/flex/flex.service");
const flex_country_allowlist_service_1 = require("../services/flex-country-allowlist.service");
const flex_countries_payload_1 = require("../utils/flex-countries-payload");
// ✅ Test Token
const getFlexTokenController = async (req, res) => {
    try {
        const data = await flex_client_1.flexClient.getRawToken();
        res.json({
            success: true,
            data,
        });
    }
    catch (error) {
        console.error("Token Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: error.response?.data || error.message,
        });
    }
};
exports.getFlexTokenController = getFlexTokenController;
// ✅ Test MD5
const getFlexMD5Controller = async (req, res) => {
    try {
        const data = (0, flex_service_1.generateFlexMD5)();
        res.json({
            success: true,
            data,
        });
    }
    catch (error) {
        console.error("MD5 Error:", error.message);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getFlexMD5Controller = getFlexMD5Controller;
// ✅ Generic API tester
const testFlexProtectedAPI = async (req, res) => {
    try {
        // replace with actual endpoint later
        const data = await flex_client_1.flexClient.request("GET", "/");
        res.json({
            success: true,
            data,
        });
    }
    catch (error) {
        console.error("Flex API Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: error.response?.data || error.message,
        });
    }
};
exports.testFlexProtectedAPI = testFlexProtectedAPI;
const getFlexCountriesController = async (_req, res) => {
    try {
        const [data, allowlist] = await Promise.all([
            (0, flex_service_2.getFlexCountries)(),
            (0, flex_country_allowlist_service_1.readAllowlist)(),
        ]);
        const rows = (0, flex_countries_payload_1.extractCountryRows)(data);
        const payload = allowlist.length > 0 && rows.length > 0
            ? (0, flex_countries_payload_1.setCountryRowsInPayload)(data, (0, flex_country_allowlist_service_1.filterCountriesByAllowlist)(rows, allowlist))
            : data;
        res.json({
            success: true,
            data: payload,
        });
    }
    catch (error) {
        console.error("Countries Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: error.response?.data || error.message,
        });
    }
};
exports.getFlexCountriesController = getFlexCountriesController;
const getFlexBanksController = async (req, res) => {
    try {
        const data = await (0, flex_service_1.getFlexBanks)(req.params.couCode);
        res.json({
            success: true,
            data,
        });
    }
    catch (error) {
        console.error("Banks Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: error.response?.data || error.message,
        });
    }
};
exports.getFlexBanksController = getFlexBanksController;
/** Flex server-to-server callback after STK; extend when payload shape is confirmed. */
const flexStkCallbackController = async (req, res) => {
    try {
        console.info("[Flex STK callback]", JSON.stringify(req.body ?? {}));
        res.status(200).json({ ok: true });
    }
    catch (e) {
        console.error("[Flex STK callback] error", e);
        res.status(200).json({ ok: true });
    }
};
exports.flexStkCallbackController = flexStkCallbackController;
