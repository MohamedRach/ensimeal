/*
  Warnings:

  - Changed the type of `prep_time` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "prep_time",
ADD COLUMN     "prep_time" INTEGER NOT NULL;
