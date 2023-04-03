import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(courseId?: number): Promise<Courses | Courses[]> {
  if (!courseId) {
    const courses = await coursesRepository.getCourses() as Courses[];
    if (courses.length === 0) {
      throw new Error('No courses were found');
    }
    return courses;

  } else {
    const course = await coursesRepository.getFindUniqueCourse(courseId) as Courses;
    if (!course) {
      throw new Error(`Course with id ${courseId} not found`);
    }
    return course;

  }
}

async function upsertCourse(course: Prisma.CoursesCreateInput, courseId?: number | undefined): Promise<Courses> {
  const result = await coursesRepository.upsertCourse(course, courseId);
  if (result == null) {
    throw new Error("Couldn't update or create the course");
  }
  
  return result;
}

const coursesService = {
  getCourses,
  upsertCourse
};

export default coursesService;

