import { prisma } from '@/config';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(): Promise<Courses[]> {
  try {
    const listCourses: Promise<Courses[]> = prisma.courses.findMany();
    return listCourses;

  } catch (error) {
    console.log(error)
  }
};

async function upsertCourse(course: Prisma.CoursesCreateInput, courseId?: number) {
  const upsert = await prisma.courses.upsert({
    where: {
      id: courseId | 0
    },
    create: { ...course },
    update: { ...course }
  });

  return upsert;
}

const coursesRepository = {
  getCourses,
  upsertCourse
};

export default coursesRepository;