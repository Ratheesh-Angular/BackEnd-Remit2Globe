"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedAllowlistCodes = getCachedAllowlistCodes;
exports.setCachedAllowlistCodes = setCachedAllowlistCodes;
exports.readAllowlist = readAllowlist;
exports.writeAllowlist = writeAllowlist;
exports.filterCountriesByAllowlist = filterCountriesByAllowlist;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const FILE_NAME = "flex-country-allowlist.json";
function allowlistPath() {
    return path_1.default.join(process.cwd(), "data", FILE_NAME);
}
let cache = null;
function getCachedAllowlistCodes() {
    if (!cache)
        return [];
    return cache.couCodes;
}
function setCachedAllowlistCodes(couCodes) {
    cache = { couCodes };
}
async function readAllowlist() {
    const p = allowlistPath();
    try {
        const raw = await promises_1.default.readFile(p, "utf8");
        const j = JSON.parse(raw);
        const list = Array.isArray(j.couCodes)
            ? j.couCodes.map((c) => String(c).trim().toUpperCase()).filter(Boolean)
            : [];
        cache = { couCodes: list };
        return list;
    }
    catch {
        cache = { couCodes: [] };
        return [];
    }
}
async function writeAllowlist(couCodes) {
    const normalized = Array.from(new Set(couCodes.map((c) => String(c).trim().toUpperCase()).filter(Boolean)));
    const p = allowlistPath();
    await promises_1.default.mkdir(path_1.default.dirname(p), { recursive: true });
    const payload = { couCodes: normalized };
    await promises_1.default.writeFile(p, JSON.stringify(payload, null, 2), "utf8");
    cache = { couCodes: normalized };
}
/** If allowlist is empty, do not filter (all Flex countries are shown). */
function filterCountriesByAllowlist(rows, allowlist) {
    if (!allowlist.length)
        return rows;
    const set = new Set(allowlist.map((c) => c.toUpperCase()));
    return rows.filter((r) => set.has(String(r.couCode ?? "").toUpperCase()));
}
