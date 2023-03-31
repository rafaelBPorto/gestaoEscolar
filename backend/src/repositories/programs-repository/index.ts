import { Programs } from ".prisma/client";
import { prisma } from "@/config";

async function getPrograms(): Promise<Programs[]> {
  const listPrograms: Programs[] = await prisma.programs.findMany();
  return listPrograms;
}

async function getUniqueProgram(porgramId: number): Promise<Programs> {
  const program: Programs = await prisma.programs.findUnique({
    where: {
      id: porgramId
    }
  });

  return program;
}

const programsRepository = {
  getPrograms,
  getUniqueProgram
};

export default programsRepository;