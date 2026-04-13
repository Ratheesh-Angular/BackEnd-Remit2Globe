/*
  Warnings:

  - You are about to drop the column `building` on the `IndividualProfile` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `IndividualProfile` table. All the data in the column will be lost.
  - You are about to drop the column `floor` on the `IndividualProfile` table. All the data in the column will be lost.
  - You are about to drop the column `postBox` on the `IndividualProfile` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `IndividualProfile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "DeliveryChannel" AS ENUM ('BANK_TRANSFER', 'MOBILE_MONEY');

-- CreateEnum
CREATE TYPE "OtpType" AS ENUM ('EMAIL', 'PHONE');

-- AlterTable
ALTER TABLE "IndividualProfile" DROP COLUMN "building",
DROP COLUMN "city",
DROP COLUMN "floor",
DROP COLUMN "postBox",
DROP COLUMN "street",
ADD COLUMN     "residentialAddress" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "country" TEXT,
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneVerified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "passwordHash" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Otp" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "OtpType" NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beneficiary" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deliveryChannel" "DeliveryChannel" NOT NULL,
    "fullName" TEXT NOT NULL,
    "country" TEXT,
    "bankName" TEXT,
    "accountNumber" TEXT,
    "swiftBic" TEXT,
    "mobileMoneyProvider" TEXT,
    "mobileNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Beneficiary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Otp_userId_type_idx" ON "Otp"("userId", "type");

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiary" ADD CONSTRAINT "Beneficiary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
