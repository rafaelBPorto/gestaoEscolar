import { prisma } from '@/config';
import { CoursesPrograms } from '@prisma/client';

function getCoursesPrograms(): Promise<CoursesPrograms[]> {
  const coursesPrograms = prisma.coursesPrograms.findMany();
  return coursesPrograms;
};

function getCoursesProgramById(coursesProgramsId: number): Promise<CoursesPrograms> {
  return prisma.coursesPrograms.findUnique({
    where: {
      id: coursesProgramsId
    }
  });
};

function postManyCoursesProgramas(coursesPrograms: CoursesPrograms[]) {
  return prisma.coursesPrograms.createMany({
    data: coursesPrograms
  });
};

function deleteCoursesProgramsById(courseProgramId: number){
  return prisma.coursesPrograms.delete({
    where:{
      id: courseProgramId
    }
  });
};


const coursesProgramsRepository = {
  getCoursesPrograms,
  getCoursesProgramById,
  postManyCoursesProgramas,
  deleteCoursesProgramsById
};

export default coursesProgramsRepository;