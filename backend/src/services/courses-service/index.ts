import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(): Promise<Courses[]> {
  const courses: Courses[] = await coursesRepository.getCourses();
  return courses;
}

async function upsertCourse(course: Prisma.CoursesCreateInput, id?: number | undefined): Promise<Courses> {
  const upsertCourse: Courses = await coursesRepository.upsertCourse(course, id);
  return upsertCourse;
}

const coursesService = {
  getCourses,
  upsertCourse
};

export default coursesService;

