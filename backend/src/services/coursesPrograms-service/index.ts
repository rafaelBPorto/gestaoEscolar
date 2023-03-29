import coursesProgramsRepository from "@/repositories/coursesPrograms-repository";
import { CoursesPrograms } from "@prisma/client";

async function getCoursesPrograms() {
  const coursesPrograms: CoursesPrograms[] = await coursesProgramsRepository.getCoursesPrograms();
  return coursesPrograms;
}

const coursesProgramsService = {
  getCoursesPrograms
};

export default coursesProgramsService;
