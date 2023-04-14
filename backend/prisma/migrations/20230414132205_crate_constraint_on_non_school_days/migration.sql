/*
  Warnings:

  - A unique constraint covering the columns `[type,shift,date]` on the table `non-school-days` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "non-school-days_type_shift_date_key" ON "non-school-days"("type", "shift", "date");
