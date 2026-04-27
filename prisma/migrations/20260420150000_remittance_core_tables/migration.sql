-- CreateEnum
CREATE TYPE "RemittanceStatus" AS ENUM ('DRAFT', 'PENDING_PAYMENT', 'PAYMENT_SUBMITTED', 'UNDER_REVIEW', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PayInMethod" AS ENUM ('BANK_TRANSFER', 'MOBILE_MONEY');

-- CreateTable
CREATE TABLE "RemittanceTransfer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "referenceCode" TEXT NOT NULL,
    "status" "RemittanceStatus" NOT NULL DEFAULT 'DRAFT',
    "currentStep" INTEGER NOT NULL DEFAULT 1,
    "senderCountryIso2" TEXT,
    "payCurrency" TEXT,
    "payAmount" DECIMAL(18,2),
    "recipientCountryLabel" TEXT,
    "recipientCountryIso2" TEXT,
    "receiveCurrency" TEXT,
    "receiveAmount" DECIMAL(18,2),
    "fxRateSnapshot" DECIMAL(24,10),
    "feeAmount" DECIMAL(18,2),
    "quoteExpiresAt" TIMESTAMP(3),
    "beneficiaryId" TEXT,
    "sourceOfIncome" TEXT,
    "transferPurpose" TEXT,
    "relationshipToRecipient" TEXT,
    "complianceAccepted" BOOLEAN NOT NULL DEFAULT false,
    "payInMethod" "PayInMethod",
    "payerPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RemittanceTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FxRate" (
    "id" TEXT NOT NULL,
    "fromCurrency" TEXT NOT NULL,
    "toCurrency" TEXT NOT NULL,
    "rate" DECIMAL(24,10) NOT NULL,
    "feePercent" DECIMAL(8,4) NOT NULL DEFAULT 0,
    "feeFixed" DECIMAL(18,2) NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FxRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyBankAccount" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "swiftBic" TEXT,
    "iban" TEXT,
    "currency" TEXT NOT NULL,
    "countryNote" TEXT,
    "instructions" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyBankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RemittanceTransfer_referenceCode_key" ON "RemittanceTransfer"("referenceCode");

-- CreateIndex
CREATE INDEX "RemittanceTransfer_userId_status_idx" ON "RemittanceTransfer"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "FxRate_fromCurrency_toCurrency_key" ON "FxRate"("fromCurrency", "toCurrency");

-- AddForeignKey
ALTER TABLE "RemittanceTransfer" ADD CONSTRAINT "RemittanceTransfer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemittanceTransfer" ADD CONSTRAINT "RemittanceTransfer_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
