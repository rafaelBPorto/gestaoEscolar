import coursesProgramsRepository from '@/repositories/coursesPrograms-repository';
import { CoursesPrograms } from '@prisma/client';

async function getCoursesPrograms(): Promise<CoursesPrograms[]> {
  return await coursesProgramsRepository.getCoursesPrograms();
}

const coursesProgramsService = {
  getCoursesPrograms
};

export default coursesProgramsService;
