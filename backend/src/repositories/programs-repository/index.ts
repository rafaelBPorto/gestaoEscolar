import { Programs } from ".prisma/client";
import { prisma } from "@/config";

async function getPrograms(): Promise<Programs[]> {
  const listPrograms: Programs[] = await prisma.programs.findMany();
  return listPrograms;
}

const programsRepository ={
  getPrograms
};

export default programsRepository;