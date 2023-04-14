import nonSchoolDaysService from "@/services/nonSchoolDays-service";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

export default async function postManyNonSchoolDays(req: Request, res: Response) {
  const listNonScoolDaysToCreate: Prisma.NonSchoolDaysCreateInput[] = req.body;
  try {
    const listNonScoolDaysCreated = await nonSchoolDaysService.postManyNonSchoolDays(listNonScoolDaysToCreate);
    return res.status(201).send(listNonScoolDaysCreated);
  } catch (error) {
    if (error.name === 'ConflictError') {
      return res.status(409).send({ erro: error.message });
    }
    return res.status(400);
  };

};