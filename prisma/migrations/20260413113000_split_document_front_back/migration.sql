-- AlterEnum: Update DocumentType enum to split front/back
-- First, add new enum values
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'PASSPORT_FRONT';
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'PASSPORT_BACK';
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'WORK_PERMIT_FRONT';
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'WORK_PERMIT_BACK';
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'NATIONAL_ID_FRONT';
ALTER TYPE "DocumentType" ADD VALUE IF NOT EXISTS 'NATIONAL_ID_BACK';

-- Migrate existing data to new format
UPDATE "KycDocument" 
SET "documentType" = 'PASSPORT_FRONT' 
WHERE "documentType" = 'PASSPORT';

UPDATE "KycDocument" 
SET "documentType" = 'WORK_PERMIT_FRONT' 
WHERE "documentType" = 'WORK_PERMIT';

UPDATE "KycDocument" 
SET "documentType" = 'NATIONAL_ID_FRONT' 
WHERE "documentType" = 'NATIONAL_ID';

-- Note: Old enum values (PASSPORT, WORK_PERMIT, NATIONAL_ID) will be removed in schema
-- but kept in database for now to avoid breaking existing data
