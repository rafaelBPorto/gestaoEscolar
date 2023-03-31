import { prisma } from '@/config';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(): Promise<Courses[]> {
  return await prisma.courses.findMany();
};

async function getFindUniqueCourse(courseId: number): Promise<Courses> {
  return await prisma.courses.findUnique({
    where: {
      id: courseId
    }
  });
}

async function upsertCourse(course: Prisma.CoursesCreateInput, courseId?: number): Promise<Courses> {
  return await prisma.courses.upsert({
    where: {
      id: courseId | 0
    },
    create: { ...course },
    update: { ...course }
  });
}

const coursesRepository = {
  getCourses,
  getFindUniqueCourse,
  upsertCourse
};

export default coursesRepository;