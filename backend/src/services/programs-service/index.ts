import { Programs } from ".prisma/client";
import programsRepository from "@/repositories/programs-repository";

async function getPrograms(): Promise<Programs[]> {
  return await programsRepository.getPrograms();
}

const repositoryPrograms = {
  getPrograms
};

export default repositoryPrograms;
