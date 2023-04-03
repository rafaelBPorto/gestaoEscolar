import { Prisma, Programs } from ".prisma/client";
import servicePrograms from "@/services/programs-service";
import { Request, Response } from "express";

export async function getPrograms(req: Request, res: Response) {
  const programId: number = Number(req.params.id);
  try {
    const programs: Programs[] | Programs = await servicePrograms.getPrograms(programId);
    res.send(programs);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function upsertPrograms(req: Request, res: Response) {
  const program: Prisma.ProgramsCreateInput = req.body;
  const programId: number = Number(req.params.id);
  try {
    const newProgram: Programs = await servicePrograms.upsertPrograms(program, programId);
    return res.send(newProgram);
  } catch (error) {
    res.send(error);
  }

}