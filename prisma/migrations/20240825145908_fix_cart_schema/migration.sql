/*
  Warnings:

  - The primary key for the `Cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `idBuku` on the `Cart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_pkey",
DROP COLUMN "idBuku",
ADD COLUMN     "idBuku" INTEGER NOT NULL,
ADD CONSTRAINT "Cart_pkey" PRIMARY KEY ("idBuku", "emailPembeli");
