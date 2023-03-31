import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(courseId?: number): Promise<Courses | Courses[]> {
  if (!courseId) {
    return await coursesRepository.getCourses() as Courses[];
  }

  return await coursesRepository.getFindUniqueCourse(courseId) as Courses;
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

