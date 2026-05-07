import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

/** S3 user metadata is sent as HTTP headers; non-ASCII / control chars break SigV4 signing. */
function s3AsciiMetadataValue(value: string, maxLen: number): string {
  const flat = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n/g, " ").trim();
  if (flat.length <= maxLen && /^[\t\x20-\x7E]*$/.test(flat)) {
    return flat;
  }
  const b64 = Buffer.from(flat, "utf8").toString("base64url");
  const prefixed = `b64:${b64}`;
  return prefixed.length <= maxLen ? prefixed : prefixed.slice(0, maxLen);
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const BUCKET = process.env.AWS_S3_BUCKET as string;

export const s3Service = {
  async uploadFile(
    fileBuffer: Buffer,
    originalName: string,
    mimeType: string,
    userId: string,
    documentType: string,
  ): Promise<{ fileUrl: string; fileKey: string }> {
    // Create a clean unique file key
    const ext = path.extname(originalName);
    const timestamp = Date.now();
    const fileKey = `kyc/${userId}/${documentType}/${timestamp}${ext}`;
    const contentType = (mimeType && mimeType.trim()) || "application/octet-stream";

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: BUCKET,
        Key: fileKey,
        Body: fileBuffer,
        ContentType: contentType,
        // Metadata for reference
        Metadata: {
          userId: s3AsciiMetadataValue(userId, 128),
          documentType: s3AsciiMetadataValue(documentType, 128),
          originalName: s3AsciiMetadataValue(originalName, 1024),
        },
      },
    });

    await upload.done();

    const fileUrl = `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

    return { fileUrl, fileKey };
  },

  /** Bank / remittance payment confirmation uploads (not KYC path). */
  async uploadRemittancePaymentProof(
    fileBuffer: Buffer,
    originalName: string,
    mimeType: string,
    userId: string,
    transferId: string,
  ): Promise<{ fileUrl: string; fileKey: string }> {
    const ext = path.extname(originalName) || "";
    const timestamp = Date.now();
    const safeBase = path
      .basename(originalName, ext)
      .replace(/[^a-zA-Z0-9._-]+/g, "_")
      .slice(0, 64);
    const fileKey = `remittance/${userId}/${transferId}/payment-proof/${timestamp}-${safeBase}${ext || ""}`;

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: BUCKET,
        Key: fileKey,
        Body: fileBuffer,
        ContentType: mimeType || "application/octet-stream",
        Metadata: {
          userId: s3AsciiMetadataValue(userId, 128),
          transferId: s3AsciiMetadataValue(transferId, 128),
          originalName: s3AsciiMetadataValue(originalName.slice(0, 500), 1024),
        },
      },
    });

    await upload.done();

    const fileUrl = `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

    return { fileUrl, fileKey };
  },

  async deleteFile(fileKey: string): Promise<void> {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: fileKey,
      }),
    );
  },
};
