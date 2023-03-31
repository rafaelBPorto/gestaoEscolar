import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(courseId?: number): Promise<Courses | Courses[]> {
  if (!courseId) {
    return await coursesRepository.getCourses() as Courses[];
  }

  return await coursesRepository.getFindUniqueCourse(courseId) as Courses;
}

async function upsertCourse(course: Prisma.CoursesCreateInput, id?: number | undefined): Promise<Courses> {
  return await coursesRepository.upsertCourse(course, id);
}

const coursesService = {
  getCourses,
  upsertCourse
};

export default coursesService;

