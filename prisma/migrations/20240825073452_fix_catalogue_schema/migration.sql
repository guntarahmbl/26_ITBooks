/*
  Warnings:

  - The primary key for the `Catalogue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Catalogue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catalogue" DROP CONSTRAINT "Catalogue_pkey",
DROP COLUMN "id",
ADD COLUMN     "emailPenjual" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "idBuku" SERIAL NOT NULL,
ADD CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("idBuku");
