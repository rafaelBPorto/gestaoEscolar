/*
  Warnings:

  - Changed the type of `type` on the `non-school-days` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `description` on the `non-school-days` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "non-school-days" DROP COLUMN "type",
ADD COLUMN     "type" "TypeNonSchoolDays" NOT NULL,
DROP COLUMN "description",
ADD COLUMN     "description" TEXT NOT NULL;
