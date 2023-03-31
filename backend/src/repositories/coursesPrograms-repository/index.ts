import { prisma } from '@/config';
import { CoursesPrograms } from '@prisma/client';

function getCoursesPrograms(): Promise<CoursesPrograms[]>{
  const  coursesPrograms = prisma.coursesPrograms.findMany();
  return coursesPrograms;
}



const coursesProgramsRepository = {
  getCoursesPrograms
};

export default coursesProgramsRepository;