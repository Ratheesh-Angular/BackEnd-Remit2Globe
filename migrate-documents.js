require('dotenv').config();
const { prisma } = require('./src/lib/prisma');

async function migrate() {
  try {
    console.log('Adding new document type enum values...');
    
    await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        -- Add new enum values if they don't exist
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'PASSPORT_FRONT' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'PASSPORT_FRONT';
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'PASSPORT_BACK' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'PASSPORT_BACK';
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'WORK_PERMIT_FRONT' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'WORK_PERMIT_FRONT';
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'WORK_PERMIT_BACK' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'WORK_PERMIT_BACK';
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'NATIONAL_ID_FRONT' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'NATIONAL_ID_FRONT';
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'NATIONAL_ID_BACK' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'DocumentType')) THEN
          ALTER TYPE "DocumentType" ADD VALUE 'NATIONAL_ID_BACK';
        END IF;
      END $$;
    `);
    
    console.log('Migrating existing document data...');
    
    // Migrate existing data
    await prisma.$executeRaw`UPDATE "KycDocument" SET "documentType" = 'PASSPORT_FRONT'::"DocumentType" WHERE "documentType" = 'PASSPORT'::"DocumentType"`;
    await prisma.$executeRaw`UPDATE "KycDocument" SET "documentType" = 'WORK_PERMIT_FRONT'::"DocumentType" WHERE "documentType" = 'WORK_PERMIT'::"DocumentType"`;
    await prisma.$executeRaw`UPDATE "KycDocument" SET "documentType" = 'NATIONAL_ID_FRONT'::"DocumentType" WHERE "documentType" = 'NATIONAL_ID'::"DocumentType"`;
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrate();
