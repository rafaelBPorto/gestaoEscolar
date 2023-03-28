-- CreateTable
CREATE TABLE "course_subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "course-code" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "fieldStudy" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "program" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fieldStudy" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses_programs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "id_course" INTEGER NOT NULL,
    "id_program" INTEGER NOT NULL,
    "start_at" TIMESTAMP(3),
    "finish_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_programs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_programs" ADD CONSTRAINT "courses_programs_id_program_fkey" FOREIGN KEY ("id_program") REFERENCES "program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_programs" ADD CONSTRAINT "courses_programs_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course_subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
