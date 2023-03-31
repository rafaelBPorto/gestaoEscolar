import { Programs } from ".prisma/client";
import programsRepository from "@/repositories/programs-repository";

async function getPrograms(programId?: number): Promise<Programs | Programs[]> {
  if (!programId) {
    return await programsRepository.getPrograms();
  };

  return await programsRepository.getUniqueProgram(programId);
}

const servicePrograms = {
  getPrograms
};

export default servicePrograms;
