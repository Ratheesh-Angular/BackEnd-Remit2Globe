-- IndividualProfile drift: columns present in prisma/schema.prisma but never migrated.
-- Added: passportIssuingCountry, citizenPrimaryDocumentType, nationalIdIssuingCountry,
-- residenceAddress (Prisma Json -> PostgreSQL JSONB).

ALTER TABLE "IndividualProfile" ADD COLUMN "passportIssuingCountry" TEXT,
ADD COLUMN "citizenPrimaryDocumentType" TEXT,
ADD COLUMN "nationalIdIssuingCountry" TEXT,
ADD COLUMN "residenceAddress" JSONB;
