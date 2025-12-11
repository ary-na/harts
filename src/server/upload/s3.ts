// src/server/upload/s3.ts

// AWS SDK imports
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const REGION = process.env.AWS_REGION!;
const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME!;

// Initialize S3 client with credentials from environment variables
const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFileToS3(
  fileBuffer: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: contentType,
  };

  const command = new PutObjectCommand(params);

  await s3.send(command);

  return fileName;
}
