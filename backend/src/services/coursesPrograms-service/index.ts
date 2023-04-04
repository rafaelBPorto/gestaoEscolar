import { invalidDataError } from '@/errors';
import coursesProgramsRepository from '@/repositories/coursesPrograms-repository';
import { CoursesPrograms } from '@prisma/client';

async function getCoursesPrograms(coursesProgramsId?:number): Promise<CoursesPrograms[] | CoursesPrograms> {
  if(coursesProgramsId){
    return await coursesProgramsRepository.getCoursesProgramById(coursesProgramsId);
  } else {
    return await coursesProgramsRepository.getCoursesPrograms();
  }
}

async function postCreateManyCoursesPrograms(coursesPrograms:CoursesPrograms[]) {
  return await coursesProgramsRepository.postManyCoursesProgramas(coursesPrograms);  
}
const coursesProgramsService = {
  getCoursesPrograms,
  postCreateManyCoursesPrograms
};

export default coursesProgramsService;
