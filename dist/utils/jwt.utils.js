"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.verifyPasswordSetupToken = exports.generatePasswordSetupToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const PASSWORD_SETUP_EXPIRES_IN = "30m";
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });
};
exports.generateToken = generateToken;
/** Short-lived token after email+phone OTP, used only for POST /auth/set-password */
const generatePasswordSetupToken = (userId) => {
    const payload = {
        userId,
        purpose: "PASSWORD_SETUP",
    };
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: PASSWORD_SETUP_EXPIRES_IN,
    });
};
exports.generatePasswordSetupToken = generatePasswordSetupToken;
const verifyPasswordSetupToken = (token) => {
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    if (decoded.purpose !== "PASSWORD_SETUP" || typeof decoded.userId !== "string") {
        throw new Error("INVALID_SETUP_TOKEN");
    }
    return { userId: decoded.userId, purpose: "PASSWORD_SETUP" };
};
exports.verifyPasswordSetupToken = verifyPasswordSetupToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.verifyToken = verifyToken;
