-- Align with @auth/pg-adapter: inserts into accounts/sessions do not supply id.
ALTER TABLE "Account" ALTER COLUMN "id" SET DEFAULT (gen_random_uuid())::text;
ALTER TABLE "Session" ALTER COLUMN "id" SET DEFAULT (gen_random_uuid())::text;
