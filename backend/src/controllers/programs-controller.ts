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
  };
};

export async function postProgram(req: Request, res: Response) {
  const program: Prisma.ProgramsCreateInput = req.body;
  try {
    const newProgram: Programs = await servicePrograms.postProgram(program);
    return res.send(newProgram);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send({ error: error.message });
    };
    return res.sendStatus(500);
  };
};

export async function putProgram(req: Request, res: Response) {
  const program: Prisma.ProgramsCreateInput = req.body;
  const programId: number = Number(req.params.id);
  try {
    const newProgram: Programs = await servicePrograms.putPrograms(program, programId);
    return res.send(newProgram);
  } catch (error) {
    if ( error.name === "NotFoundError"){
      return res.status(404).send({error: error.message});
    };
    if (error.name === "ConflictError") {
      return res.status(409).send({ error: error.message });
    };
    return res.sendStatus(500);
  };
};