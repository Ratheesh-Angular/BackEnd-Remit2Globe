-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('PASSPORT', 'WORK_PERMIT', 'NATIONAL_ID', 'OTHER_GOVT_ID', 'CERTIFICATE_OF_INCORPORATION', 'TRADING_LICENSE', 'CR12', 'REGULATORY_LICENSE', 'PROOF_OF_ADDRESS', 'DIRECTOR_ID', 'SHAREHOLDER_ID', 'REPRESENTATIVE_ID');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "KycStatus" ADD VALUE 'SUBMITTED';
ALTER TYPE "KycStatus" ADD VALUE 'SUSPENDED';

-- CreateTable
CREATE TABLE "IndividualProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "nationality" TEXT,
    "isNational" BOOLEAN NOT NULL DEFAULT false,
    "passportNumber" TEXT,
    "passportIssue" TIMESTAMP(3),
    "passportExpiry" TIMESTAMP(3),
    "workPermitNumber" TEXT,
    "workPermitIssue" TIMESTAMP(3),
    "workPermitExpiry" TIMESTAMP(3),
    "nationalIdNumber" TEXT,
    "nationalIdIssue" TIMESTAMP(3),
    "nationalIdExpiry" TIMESTAMP(3),
    "building" TEXT,
    "floor" TEXT,
    "street" TEXT,
    "postBox" TEXT,
    "city" TEXT,
    "country" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "occupation" TEXT,
    "employerName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndividualProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "businessName" TEXT,
    "natureOfBusiness" TEXT,
    "businessAddress" TEXT,
    "registrationNumber" TEXT,
    "incorporationDate" TIMESTAMP(3),
    "tradingLicenseNumber" TEXT,
    "tradingLicenseIssue" TIMESTAMP(3),
    "tradingLicenseExpiry" TIMESTAMP(3),
    "regulatoryLicenseNumber" TEXT,
    "regulatoryLicenseIssue" TIMESTAMP(3),
    "regulatoryLicenseExpiry" TIMESTAMP(3),
    "keyPersonnel" JSONB,
    "shareholders" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CorporateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KycDocument" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "documentType" "DocumentType" NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileSize" INTEGER,
    "mimeType" TEXT,
    "status" "DocumentStatus" NOT NULL DEFAULT 'PENDING',
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KycDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IndividualProfile_userId_key" ON "IndividualProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateProfile_userId_key" ON "CorporateProfile"("userId");

-- AddForeignKey
ALTER TABLE "IndividualProfile" ADD CONSTRAINT "IndividualProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateProfile" ADD CONSTRAINT "CorporateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KycDocument" ADD CONSTRAINT "KycDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
