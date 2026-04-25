"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdminApiKey = requireAdminApiKey;
function requireAdminApiKey(req, res, next) {
    const expected = process.env.ADMIN_API_KEY?.trim();
    if (!expected) {
        return res.status(503).json({
            success: false,
            error: "Admin API is not configured (set ADMIN_API_KEY).",
        });
    }
    const provided = String(req.header("x-admin-api-key") ?? req.header("X-Admin-Api-Key") ?? "").trim();
    if (provided !== expected) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }
    next();
}
