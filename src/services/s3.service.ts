import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

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

    const upload = new Upload({
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

  async deleteFile(fileKey: string): Promise<void> {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: fileKey,
      }),
    );
  },
};
