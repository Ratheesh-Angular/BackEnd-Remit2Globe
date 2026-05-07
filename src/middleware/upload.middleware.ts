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

/** Reject obvious installers/scripts; all other extensions allowed if MIME looks non-executable. */
const BLOCKED_EXTENSIONS = new Set([
  ".exe",
  ".msi",
  ".bat",
  ".cmd",
  ".com",
  ".scr",
  ".pif",
  ".dll",
  ".sys",
  ".vbs",
  ".vbe",
  ".ps1",
  ".psm1",
  ".app",
  ".deb",
  ".rpm",
]);

function extensionBlocked(originalName: string): boolean {
  const ext = path.extname(originalName).toLowerCase();
  return BLOCKED_EXTENSIONS.has(ext);
}

function mimeBlocked(mimetype: string): boolean {
  const t = mimetype.trim().toLowerCase();
  return (
    t === "application/x-msdownload" ||
    t === "application/x-msdos-program" ||
    t === "application/x-executable" ||
    t === "application/x-sharedlib" ||
    t === "application/javascript" ||
    t === "application/ecmascript" ||
    t === "text/javascript"
  );
}

function mimeAllowed(mimetype: string): boolean {
  const t = mimetype.trim().toLowerCase();
  if (mimeBlocked(mimetype)) return false;
  if (t.startsWith("image/")) return true;
  if (t.startsWith("text/")) return true;
  if (t.startsWith("video/")) return true;
  if (t.startsWith("audio/")) return true;
  return SPECIFIC_ALLOWED_MIMES.has(t);
}

const kycFileFilter = (
  _req: unknown,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (extensionBlocked(file.originalname)) {
    cb(new Error("This file type is not accepted for security reasons."));
    return;
  }
  if (mimeAllowed(file.mimetype)) {
    cb(null, true);
    return;
  }
  if (
    !file.mimetype ||
    file.mimetype === "application/octet-stream"
  ) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== "" && !BLOCKED_EXTENSIONS.has(ext)) {
      cb(null, true);
      return;
    }
  }
  const t = file.mimetype.trim().toLowerCase();
  if (
    t.startsWith("application/") &&
    !mimeBlocked(file.mimetype) &&
    !extensionBlocked(file.originalname)
  ) {
    cb(null, true);
    return;
  }
  cb(
    new Error(
      "File type not allowed. Use documents or media (executables blocked).",
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
