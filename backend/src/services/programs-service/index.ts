import { Prisma, Programs } from ".prisma/client";
import { conflictError, notFoundError } from "@/errors";
import programsRepository from "@/repositories/programs-repository";

async function getPrograms(programId?: number): Promise<Programs | Programs[]> {
  if (!programId) {
    return await programsRepository.getPrograms();
  };

  return await programsRepository.getProgramById(programId);
};

async function postProgram(program:Prisma.ProgramsCreateInput): Promise<Programs> {
  const newProgram = await programsRepository.postProgram(program);
  if(!newProgram) {
    throw conflictError("Unable to register the program");
  }
  return newProgram;
};

async function putPrograms(program: Prisma.ProgramsCreateInput, programId: number) : Promise<Programs>{
  const findProgram = await programsRepository.getProgramById(programId);
  if(!findProgram){
    throw notFoundError();
  };

  const updateProgram = await programsRepository.putProgram(program, programId);
  if (!updateProgram) {
    throw conflictError("It was not possible to make the change(s)");
  };
  return updateProgram;
};

const servicePrograms = {
  getPrograms,
  postProgram,
  putPrograms
};

export default servicePrograms;
