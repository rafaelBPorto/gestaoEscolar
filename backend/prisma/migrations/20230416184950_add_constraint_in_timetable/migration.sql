/*
  Warnings:

  - You are about to drop the `Timetable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Timetable" DROP CONSTRAINT "Timetable_id-course_fkey";

-- DropForeignKey
ALTER TABLE "Timetable" DROP CONSTRAINT "Timetable_id-program_fkey";

-- DropTable
DROP TABLE "Timetable";

-- CreateTable
CREATE TABLE "timetable" (
    "id" SERIAL NOT NULL,
    "id-program" INTEGER NOT NULL,
    "id-course" INTEGER NOT NULL,
    "start-class" TIMESTAMP(3) NOT NULL,
    "end-class" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timetable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "timetable_id-program_id-course_start-class_key" ON "timetable"("id-program", "id-course", "start-class");

-- AddForeignKey
ALTER TABLE "timetable" ADD CONSTRAINT "timetable_id-course_fkey" FOREIGN KEY ("id-course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timetable" ADD CONSTRAINT "timetable_id-program_fkey" FOREIGN KEY ("id-program") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
