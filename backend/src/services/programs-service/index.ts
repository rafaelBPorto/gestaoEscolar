import { Prisma, Programs } from ".prisma/client";
import programsRepository from "@/repositories/programs-repository";

async function getPrograms(programId?: number): Promise<Programs | Programs[]> {
  if (!programId) {
    return await programsRepository.getPrograms();
  };

  return await programsRepository.getProgramById(programId);
}

async function upsertPrograms(program: Prisma.ProgramsCreateInput, programId?: number) : Promise<Programs>{
  const result = await programsRepository.upsertPrograms(program, programId);
  if (!result) {
    if (programId) {
      throw new Error(`Program wiht id ${programId} not found`);
    } else {
      throw new Error(`Not possible to register this course, please try again.`);
    }
  }
  return result;
}

const servicePrograms = {
  getPrograms,
  upsertPrograms
};

export default servicePrograms;
