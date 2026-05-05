-- Recipient visibility flag for send-money pickers (schema already expected this column).

ALTER TABLE "Beneficiary" ADD COLUMN IF NOT EXISTS "active" BOOLEAN NOT NULL DEFAULT true;
