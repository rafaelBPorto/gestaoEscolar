import { Programs, Prisma } from ".prisma/client";
import { prisma } from "@/config";

async function getPrograms(): Promise<Programs[]> {
  const listPrograms: Programs[] = await prisma.programs.findMany();
  return listPrograms;
}

async function getProgramById(porgramId: number): Promise<Programs> {
  const program: Programs = await prisma.programs.findUnique({
    where: {
      id: porgramId
    }
  });

  return program;
}

async function putProgram(program: Prisma.ProgramsCreateInput, programId: number): Promise<Programs> {
  return await prisma.programs.update({
    where: { id: programId },
    data: { ...program }
  });
};

async function postProgram(program: Prisma.ProgramsCreateInput): Promise<Programs> {
  return await prisma.programs.create({
    data: { ...program }
  });
};

const programsRepository = {
  getPrograms,
  getProgramById,
  postProgram,
  putProgram
};

export default programsRepository;