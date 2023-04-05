import coursesRepository from '@/repositories/courses-repository';
import { Courses, Prisma } from '@prisma/client';

async function getCourses(courseId?: number): Promise<Courses | Courses[]> {
  if (!courseId) {
    const courses = await coursesRepository.getCourses() as Courses[];
    if (courses.length === 0) {
      throw new Error('No courses were found');
    };
    return courses;

  } else {
    const course = await coursesRepository.getFindUniqueCourseById(courseId) as Courses;
    if (!course) {
      throw new Error(`Course with id ${courseId} not found`);
    };
    return course;

  };
};

async function postCourse(course: Prisma.CoursesCreateInput) : Promise<Courses> {
  return await coursesRepository.postCourse(course);
};

async function updateCourse(course: Prisma.CoursesCreateInput, courseId?: number): Promise<Courses> {
  const result = await coursesRepository.updateCourse(course, courseId);
  if (result == null) {
    throw new Error("Couldn't update the course");
  };
  
  return result;
};

const coursesService = {
  getCourses,
  postCourse,
  updateCourse
};

export default coursesService;

