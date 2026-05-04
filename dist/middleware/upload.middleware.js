"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPaymentProof = exports.upload = exports.KYC_UPLOAD_MAX_BYTES = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
// Store in memory — we upload to S3 directly
const storage = multer_1.default.memoryStorage();
exports.KYC_UPLOAD_MAX_BYTES = 25 * 1024 * 1024;
/** Explicit types (images/text handled by prefix rules below). */
const SPECIFIC_ALLOWED_MIMES = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/rtf",
    "application/vnd.oasis.opendocument.text",
    "application/vnd.oasis.opendocument.spreadsheet",
]);
const ALLOWED_EXTENSIONS = new Set([
    ".pdf",
    ".jpg",
    ".jpeg",
    ".jpe",
    ".jfif",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".tif",
    ".tiff",
    ".heic",
    ".heif",
    ".avif",
    ".svg",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".txt",
    ".csv",
    ".rtf",
    ".odt",
    ".ods",
]);
function extensionAllowed(originalName) {
    const ext = path_1.default.extname(originalName).toLowerCase();
    return ext !== "" && ALLOWED_EXTENSIONS.has(ext);
}
function mimeAllowed(mimetype) {
    const t = mimetype.trim().toLowerCase();
    if (t.startsWith("image/"))
        return true;
    if (t.startsWith("text/"))
        return true;
    return SPECIFIC_ALLOWED_MIMES.has(t);
}
const kycFileFilter = (_req, file, cb) => {
    if (mimeAllowed(file.mimetype)) {
        cb(null, true);
        return;
    }
    if (!file.mimetype ||
        file.mimetype === "application/octet-stream") {
        if (extensionAllowed(file.originalname)) {
            cb(null, true);
            return;
        }
    }
    cb(new Error("File type not allowed. Upload images, PDF, Word/Excel/PowerPoint, CSV, or plain text."));
};
exports.upload = (0, multer_1.default)({
    storage,
    fileFilter: kycFileFilter,
    limits: { fileSize: exports.KYC_UPLOAD_MAX_BYTES },
});
exports.uploadPaymentProof = (0, multer_1.default)({
    storage,
    fileFilter: kycFileFilter,
    limits: { fileSize: 15 * 1024 * 1024 }, // 15MB per file
});
