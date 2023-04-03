import coursesProgramsRepository from '@/repositories/coursesPrograms-repository';
import { CoursesPrograms } from '@prisma/client';

async function getCoursesPrograms(coursesProgramsId?:number): Promise<CoursesPrograms[] | CoursesPrograms> {
  if(coursesProgramsId){
    return await coursesProgramsRepository.getCoursesProgramById(coursesProgramsId);
  } else {
    return await coursesProgramsRepository.getCoursesPrograms();
  }
}

const coursesProgramsService = {
  getCoursesPrograms
};

export default coursesProgramsService;
