-- AlterTable
ALTER TABLE "Catalogue" ADD COLUMN     "bank" TEXT DEFAULT 'No Bank',
ADD COLUMN     "contact" TEXT NOT NULL DEFAULT 'No Contact',
ADD COLUMN     "norek" TEXT DEFAULT 'No nomor rekening',
ALTER COLUMN "notes" SET DEFAULT 'No Notes';
