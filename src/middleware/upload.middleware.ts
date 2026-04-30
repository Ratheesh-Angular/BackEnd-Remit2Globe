import path from "path";
import multer from "multer";

// Store in memory — we upload to S3 directly
const storage = multer.memoryStorage();

export const KYC_UPLOAD_MAX_BYTES = 25 * 1024 * 1024;

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

function extensionAllowed(originalName: string): boolean {
  const ext = path.extname(originalName).toLowerCase();
  return ext !== "" && ALLOWED_EXTENSIONS.has(ext);
}

function mimeAllowed(mimetype: string): boolean {
  const t = mimetype.trim().toLowerCase();
  if (t.startsWith("image/")) return true;
  if (t.startsWith("text/")) return true;
  return SPECIFIC_ALLOWED_MIMES.has(t);
}

const kycFileFilter = (
  _req: unknown,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (mimeAllowed(file.mimetype)) {
    cb(null, true);
    return;
  }
  if (
    !file.mimetype ||
    file.mimetype === "application/octet-stream"
  ) {
    if (extensionAllowed(file.originalname)) {
      cb(null, true);
      return;
    }
  }
  cb(
    new Error(
      "File type not allowed. Upload images, PDF, Word/Excel/PowerPoint, CSV, or plain text.",
    ),
  );
};

export const upload = multer({
  storage,
  fileFilter: kycFileFilter,
  limits: { fileSize: KYC_UPLOAD_MAX_BYTES },
});

export const uploadPaymentProof = multer({
  storage,
  fileFilter: kycFileFilter,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB per file
});
