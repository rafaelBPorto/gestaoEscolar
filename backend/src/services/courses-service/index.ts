import { notFoundError } from '@/errors';
import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(courseId?: number): Promise<Courses | Courses[]> {
  if (!courseId) {
    const courses = await coursesRepository.getCourses() as Courses[];
    if (courses.length === 0) {
      throw notFoundError();
    };
    return courses;

  } else {
    const course = await coursesRepository.getFindUniqueCourseById(courseId) as Courses;
    if (!course) {
      throw notFoundError();
    };
    return course;
  };
};

async function postCourse(course: Prisma.CoursesCreateInput) : Promise<Courses> {
  return await coursesRepository.postCourse(course);
};

async function putCourse(course: Prisma.CoursesCreateInput, courseId: number): Promise<Courses> {
  const findCourse = await coursesRepository.getFindUniqueCourseById(courseId);
  if(!findCourse){
    throw notFoundError();
  };

  const result = await coursesRepository.putCourse(course, courseId);
  return result;
};


const coursesService = {
  getCourses,
  postCourse,
  putCourse
};

export default coursesService;

