"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/load-env");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const kyc_routes_1 = __importDefault(require("./routes/kyc.routes"));
const beneficiary_routes_1 = __importDefault(require("./routes/beneficiary.routes"));
const otp_routes_1 = __importDefault(require("./routes/otp.routes"));
const path_1 = __importDefault(require("path"));
const flex_routes_1 = __importDefault(require("./routes/flex.routes"));
const remittance_routes_1 = __importDefault(require("./routes/remittance.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const app = (0, express_1.default)();
// const PORT = process.env.PORT ?? 5000;
// Better (explicit number conversion)
const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";
const CORS_ORIGINS = (process.env.CORS_ORIGINS ||
    [
        FRONTEND_URL,
        "http://localhost:3000",
        "http://localhost:3001",
        "https://amigo-web.onrender.com",
    ].join(","))
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
// ─── Middleware ──────────────────────────────────────────────────────────────
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (CORS_ORIGINS.includes(origin))
            return callback(null, true);
        return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Admin-Api-Key",
        "x-admin-api-key",
        "X-Internal-Auth",
        "x-internal-auth",
    ],
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// ─── Routes ─────────────────────────────────────────────────────────────────
app.use("/api/auth", auth_routes_1.default);
app.use("/api/kyc", kyc_routes_1.default);
app.use("/api/beneficiaries", beneficiary_routes_1.default);
app.use("/api/otp", otp_routes_1.default);
// Remove this line
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use("/api/flex", flex_routes_1.default);
app.use("/api/admin", admin_routes_1.default);
app.use("/api/remittance", remittance_routes_1.default);
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
});
// Add this route temporarily
app.get("/api/debug/ip", async (_req, res) => {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = (await response.json());
        res.json({
            outboundIP: data.ip,
            service: "amigo-api-uwm5.onrender.com",
        });
    }
    catch (error) {
        res.status(500).json({ error: "Could not fetch IP" });
    }
});
// ─── Error handler ───────────────────────────────────────────────────────────
app.use(error_middleware_1.errorMiddleware);
// ─── Start ───────────────────────────────────────────────────────────────────
// app.listen(PORT, () => {
//   console.log(
//     `Server running on http://localhost:${PORT} [${process.env.NODE_ENV}]`,
//   );
// });
// ─── Start ───────────────────────────────────────────────────────────────────
const HOST = "0.0.0.0"; // Bind to all network interfaces
app.listen(Number(PORT), HOST, () => {
    const env = process.env.NODE_ENV || "development";
    console.log(`Server running on port ${PORT} [${env}]`);
});
exports.default = app;
