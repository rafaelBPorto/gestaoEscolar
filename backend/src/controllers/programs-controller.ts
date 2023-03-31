import { Programs } from ".prisma/client"
import programsRepository from "@/repositories/programs-repository"
import { Request, Response } from "express";

export default async function getPrograms(req: Request, res: Response) {
  try {
    const programs: Programs[] = await programsRepository.getPrograms();
    res.send(programs)
  } catch (error) {
    return res.status(500).send(error)
  }
}