/*
  Warnings:

  - The primary key for the `Catalogue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Catalogue` table. All the data in the column will be lost.
  - Added the required column `emailPenjual` to the `Catalogue` table without a default value. This is not possible if the table is not empty.
  - The required column `idBuku` was added to the `Catalogue` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `description` on table `Catalogue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Catalogue" DROP CONSTRAINT "Catalogue_pkey",
DROP COLUMN "id",
ADD COLUMN     "emailPenjual" TEXT NOT NULL,
ADD COLUMN     "idBuku" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ADD CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("idBuku");

-- CreateTable
CREATE TABLE "Cart" (
    "idBuku" TEXT NOT NULL,
    "emailPembeli" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("idBuku")
);
