import { prisma } from '@/config';
import { CoursesPrograms } from '@prisma/client';

function getCoursesPrograms(): Promise<CoursesPrograms[]> {
  const coursesPrograms = prisma.coursesPrograms.findMany();
  return coursesPrograms;
}

function getCoursesProgramById(coursesProgramsId: number): Promise<CoursesPrograms> {
  return prisma.coursesPrograms.findUnique({
    where: { 
      id: coursesProgramsId
    }
  });
}


const coursesProgramsRepository = {
  getCoursesPrograms,
  getCoursesProgramById
};

export default coursesProgramsRepository;