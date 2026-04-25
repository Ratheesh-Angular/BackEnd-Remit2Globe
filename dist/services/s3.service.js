"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv.config();
const s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
const BUCKET = process.env.AWS_S3_BUCKET;
exports.s3Service = {
    async uploadFile(fileBuffer, originalName, mimeType, userId, documentType) {
        // Create a clean unique file key
        const ext = path_1.default.extname(originalName);
        const timestamp = Date.now();
        const fileKey = `kyc/${userId}/${documentType}/${timestamp}${ext}`;
        const upload = new lib_storage_1.Upload({
            client: s3Client,
            params: {
                Bucket: BUCKET,
                Key: fileKey,
                Body: fileBuffer,
                ContentType: mimeType,
                // Metadata for reference
                Metadata: {
                    userId,
                    documentType,
                    originalName,
                },
            },
        });
        await upload.done();
        const fileUrl = `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
        return { fileUrl, fileKey };
    },
    /** Bank / remittance payment confirmation uploads (not KYC path). */
    async uploadRemittancePaymentProof(fileBuffer, originalName, mimeType, userId, transferId) {
        const ext = path_1.default.extname(originalName) || "";
        const timestamp = Date.now();
        const safeBase = path_1.default
            .basename(originalName, ext)
            .replace(/[^a-zA-Z0-9._-]+/g, "_")
            .slice(0, 64);
        const fileKey = `remittance/${userId}/${transferId}/payment-proof/${timestamp}-${safeBase}${ext || ""}`;
        const upload = new lib_storage_1.Upload({
            client: s3Client,
            params: {
                Bucket: BUCKET,
                Key: fileKey,
                Body: fileBuffer,
                ContentType: mimeType || "application/octet-stream",
                Metadata: {
                    userId,
                    transferId,
                    originalName: originalName.slice(0, 200),
                },
            },
        });
        await upload.done();
        const fileUrl = `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
        return { fileUrl, fileKey };
    },
    async deleteFile(fileKey) {
        await s3Client.send(new client_s3_1.DeleteObjectCommand({
            Bucket: BUCKET,
            Key: fileKey,
        }));
    },
};
