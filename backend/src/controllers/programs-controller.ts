import { Programs } from ".prisma/client";
import servicePrograms from "@/services/programs-service";
import { Request, Response } from "express";

export default async function getPrograms(req: Request, res: Response) {
  const programId: number = Number(req.params.id);
  try {
    const programs: Programs[] | Programs = await servicePrograms.getPrograms(programId);
    res.send(programs);
  } catch (error) {
    return res.status(500).send(error);
  }
}