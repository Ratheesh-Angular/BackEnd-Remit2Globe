-- Split beneficiary fullName into firstName + lastName; add branchName (bank).

ALTER TABLE "Beneficiary" ADD COLUMN "firstName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Beneficiary" ADD COLUMN "lastName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Beneficiary" ADD COLUMN "branchName" TEXT;

UPDATE "Beneficiary" SET
  "firstName" = CASE
    WHEN COALESCE(trim("fullName"), '') = '' THEN ''
    WHEN strpos(trim("fullName"), ' ') > 0 THEN trim(substring(trim("fullName") from 1 for strpos(trim("fullName"), ' ') - 1))
    ELSE trim("fullName")
  END,
  "lastName" = CASE
    WHEN COALESCE(trim("fullName"), '') = '' THEN ''
    WHEN strpos(trim("fullName"), ' ') > 0 THEN trim(substring(trim("fullName") from strpos(trim("fullName"), ' ') + 1))
    ELSE ''
  END;

ALTER TABLE "Beneficiary" DROP COLUMN "fullName";
ALTER TABLE "Beneficiary" ALTER COLUMN "firstName" DROP DEFAULT;
ALTER TABLE "Beneficiary" ALTER COLUMN "lastName" DROP DEFAULT;
