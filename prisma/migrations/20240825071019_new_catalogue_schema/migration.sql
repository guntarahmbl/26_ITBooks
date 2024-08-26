/*
  Warnings:

  - The primary key for the `Catalogue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `emailPenjual` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `idBuku` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `Catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Catalogue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catalogue" DROP CONSTRAINT "Catalogue_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "emailPenjual",
DROP COLUMN "idBuku",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "publisher",
DROP COLUMN "updatedAt",
ADD COLUMN     "condition" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "edition" TEXT NOT NULL DEFAULT 'Unknown Edition',
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT 'No Image URL',
ADD COLUMN     "isbn" TEXT NOT NULL DEFAULT 'Unknown ISBN',
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Unknown Title',
ADD COLUMN     "volume" TEXT NOT NULL DEFAULT 'Unknown Volume',
ALTER COLUMN "description" SET DEFAULT 'No Description',
ALTER COLUMN "author" SET DEFAULT 'Unknown Author',
ALTER COLUMN "price" SET DEFAULT 0,
ADD CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("id");
