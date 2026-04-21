import multer from "multer";

// Store in memory — we upload to S3 directly
const storage = multer.memoryStorage();

/** PDF, common images, and typical document uploads for KYC. */
const ALLOWED_MIMES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/pjpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/bmp",
  "image/x-ms-bmp",
  "image/tiff",
  "image/tif",
  "image/x-tiff",
  "image/heic",
  "image/heif",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const fileFilter = (
  req: any,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (ALLOWED_MIMES.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "File type not allowed. Use PDF, Word (.doc/.docx), or a common image (JPEG, PNG, GIF, WebP, BMP, TIFF, HEIC).",
      ),
    );
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

/** Wider set for remittance payment proof (images + office + pdf + text). */
const PAYMENT_PROOF_MIMES = new Set([
  ...ALLOWED_MIMES,
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv",
  "application/rtf",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.oasis.opendocument.spreadsheet",
]);

const paymentProofFilter = (
  _req: unknown,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (PAYMENT_PROOF_MIMES.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "File type not allowed. Use PDF, Word, Excel, PowerPoint, images, CSV, or plain text.",
      ),
    );
  }
};

export const uploadPaymentProof = multer({
  storage,
  fileFilter: paymentProofFilter,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB per file
});
