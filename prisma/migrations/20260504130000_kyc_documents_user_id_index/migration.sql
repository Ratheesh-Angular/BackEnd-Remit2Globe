-- Speeds JOIN / filtering documents by owner (GET /api/kyc/profile).
CREATE INDEX "KycDocument_userId_idx" ON "KycDocument"("userId");
