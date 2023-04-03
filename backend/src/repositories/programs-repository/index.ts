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

async function upsertPrograms(program: Prisma.ProgramsCreateInput, programId?: number): Promise<Programs> {
  return await prisma.programs.upsert({
    where: { id: programId | 0 },
    create: { ...program },
    update: { ...program }
  });
}

const programsRepository = {
  getPrograms,
  getProgramById,
  upsertPrograms
};

export default programsRepository;