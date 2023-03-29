import coursesProgramsRepository from "@/repositories/coursesPrograms-repository";

async function getCoursesPrograms() {
  const coursesPrograms = await coursesProgramsRepository.getCoursesPrograms();
}

const coursesProgramsService = {
  getCoursesPrograms
};

export default coursesProgramsService;
