/*
  Warnings:

  - A unique constraint covering the columns `[name,workload]` on the table `course` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Shift" AS ENUM ('Morning', 'Afternoon', 'Night');

-- CreateTable
CREATE TABLE "non-school-days" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shift" "Shift" NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "non-school-days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timetable" (
    "id" SERIAL NOT NULL,
    "id-program" INTEGER NOT NULL,
    "id-course" INTEGER NOT NULL,
    "start-class" TIMESTAMP(3) NOT NULL,
    "end-class" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Timetable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "course_name_workload_key" ON "course"("name", "workload");

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_id-course_fkey" FOREIGN KEY ("id-course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_id-program_fkey" FOREIGN KEY ("id-program") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
