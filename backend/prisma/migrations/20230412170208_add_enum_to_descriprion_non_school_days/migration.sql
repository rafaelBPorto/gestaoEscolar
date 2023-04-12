/*
  Warnings:

  - Changed the type of `description` on the `non-school-days` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeNonSchoolDays" AS ENUM ('holiday', 'educational', 'recess');

-- AlterTable
ALTER TABLE "non-school-days" DROP COLUMN "description",
ADD COLUMN     "description" "TypeNonSchoolDays" NOT NULL;
