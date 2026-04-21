-- CreateTable
CREATE TABLE "RemittancePaymentProof" (
    "id" TEXT NOT NULL,
    "transferId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RemittancePaymentProof_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RemittancePaymentProof_transferId_idx" ON "RemittancePaymentProof"("transferId");

-- AddForeignKey
ALTER TABLE "RemittancePaymentProof" ADD CONSTRAINT "RemittancePaymentProof_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "RemittanceTransfer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
