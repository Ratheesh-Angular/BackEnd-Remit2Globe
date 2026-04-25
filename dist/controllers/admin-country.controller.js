"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCountryAllowlistController = exports.getCountryAllowlistController = exports.getAdminFlexCountriesController = void 0;
const flex_service_1 = require("../integrations/flex/flex.service");
const flex_country_allowlist_service_1 = require("../services/flex-country-allowlist.service");
const flex_countries_payload_1 = require("../utils/flex-countries-payload");
const getAdminFlexCountriesController = async (_req, res) => {
    try {
        const data = await (0, flex_service_1.getFlexCountries)();
        res.json({ success: true, data });
    }
    catch (error) {
        const err = error;
        console.error("Admin flex countries error:", err?.message ?? error);
        res.status(500).json({
            success: false,
            error: err?.message ?? "Failed to load countries",
        });
    }
};
exports.getAdminFlexCountriesController = getAdminFlexCountriesController;
const getCountryAllowlistController = async (_req, res) => {
    try {
        const couCodes = await (0, flex_country_allowlist_service_1.readAllowlist)();
        res.json({ success: true, data: { couCodes } });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            error: err?.message ?? "Failed to read allowlist",
        });
    }
};
exports.getCountryAllowlistController = getCountryAllowlistController;
const putCountryAllowlistController = async (req, res) => {
    try {
        const body = req.body;
        const raw = body?.couCodes;
        if (!Array.isArray(raw)) {
            return res.status(400).json({
                success: false,
                error: "Body must include couCodes: string[]",
            });
        }
        const flex = await (0, flex_service_1.getFlexCountries)();
        const validCodes = new Set((0, flex_countries_payload_1.extractCountryRows)(flex)
            .map((r) => String(r.couCode ?? "").trim().toUpperCase())
            .filter(Boolean));
        const requested = raw.map((c) => String(c).trim().toUpperCase());
        const unknown = requested.filter((c) => c && !validCodes.has(c));
        if (unknown.length) {
            return res.status(400).json({
                success: false,
                error: `Unknown couCode(s): ${unknown.slice(0, 10).join(", ")}${unknown.length > 10 ? "…" : ""}`,
            });
        }
        await (0, flex_country_allowlist_service_1.writeAllowlist)(requested);
        res.json({ success: true, data: { couCodes: requested } });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            error: err?.message ?? "Failed to save allowlist",
        });
    }
};
exports.putCountryAllowlistController = putCountryAllowlistController;
