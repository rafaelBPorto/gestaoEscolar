import { prisma } from '@/config';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(): Promise<Courses[]> {
  return await prisma.courses.findMany();
};

async function getFindUniqueCourseById(courseId: number): Promise<Courses> {
  return await prisma.courses.findUnique({
    where: { id: courseId }
  });
};

async function postCourse(course: Prisma.CoursesCreateInput): Promise<Courses> {
  return await prisma.courses.create({
    data: { ...course }
  });
};

async function updateCourse(course: Prisma.CoursesCreateInput, courseId: number): Promise<Courses> {
  return await prisma.courses.update({
    where: { id: courseId },
    data: { ...course }
  });
};

const coursesRepository = {
  getCourses,
  getFindUniqueCourseById,
  postCourse,
  updateCourse
};

export default coursesRepository;    