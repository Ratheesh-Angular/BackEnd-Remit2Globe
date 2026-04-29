"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticFlexCountriesPayload = getStaticFlexCountriesPayload;
const countryList_json_1 = __importDefault(require("./countryList.json"));
function normalizeRows() {
    const seen = new Set();
    const rows = [];
    for (const r of countryList_json_1.default) {
        const couCode = String(r.couCode ?? "").trim().toUpperCase();
        const couName = String(r.couName ?? "").trim();
        if (!couCode || !couName || seen.has(couCode))
            continue;
        seen.add(couCode);
        rows.push({ couCode, couName });
    }
    rows.sort((a, b) => String(a.couName ?? "").localeCompare(String(b.couName ?? "")));
    return rows;
}
/**
 * Bundled country catalog in the same nested shape Flex returned, so
 * `extractCountryRows` / `setCountryRowsInPayload` and admin `parseFlexRows` keep working.
 */
function getStaticFlexCountriesPayload() {
    return { data: { data: normalizeRows() } };
}
