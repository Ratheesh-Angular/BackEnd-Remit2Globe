"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMD5 = exports.generateTimestamp = void 0;
const crypto_1 = __importDefault(require("crypto"));
// yyyyMMddHHmmss
const generateTimestamp = () => {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, "0");
    return (now.getFullYear().toString() +
        pad(now.getMonth() + 1) +
        pad(now.getDate()) +
        pad(now.getHours()) +
        pad(now.getMinutes()) +
        pad(now.getSeconds()));
};
exports.generateTimestamp = generateTimestamp;
const generateMD5 = (userCode, timestamp, rawPassword) => {
    const raw = `${userCode}${rawPassword}${timestamp}`;
    return crypto_1.default.createHash("md5").update(raw).digest("hex");
};
exports.generateMD5 = generateMD5;
