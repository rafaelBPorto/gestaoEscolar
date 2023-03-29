import { prisma } from '@/config';

function getCoursesPrograms(){
  const  coursesPrograms = prisma.coursesPrograms.findMany()
  return coursesPrograms;
}

const coursesProgramsRepository = {
  getCoursesPrograms
};

export default coursesProgramsRepository