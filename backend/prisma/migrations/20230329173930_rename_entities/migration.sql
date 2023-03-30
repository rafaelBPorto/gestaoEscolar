/*
  Warnings:

  - You are about to drop the `course_subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses_programs" DROP CONSTRAINT "courses_programs_id_course_fkey";

-- DropTable
DROP TABLE "course_subject";

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "course-code" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "fieldStudy" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_programs" ADD CONSTRAINT "courses_programs_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
