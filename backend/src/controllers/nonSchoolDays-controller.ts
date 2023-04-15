import nonSchoolDaysService from "@/services/nonSchoolDays-service";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

export async function getNonSchoolDays(req: Request, res: Response) {
  try {
    const listNonScoolDays = await nonSchoolDaysService.getNonSchoolDays();
    return res.status(200).send(listNonScoolDays);
  } catch (error) {
    if (error.name === 'NotFoundError') {
      return res.status(404).send({error: error.message});
    };
    return res.sendStatus(500);
  };
};

export async function postManyNonSchoolDays(req: Request, res: Response) {
  const listNonScoolDaysToCreate: Prisma.NonSchoolDaysCreateInput[] = req.body;
  try {
    const listNonScoolDaysCreated = await nonSchoolDaysService.postManyNonSchoolDays(listNonScoolDaysToCreate);
    return res.status(201).send(listNonScoolDaysCreated);
  } catch (error) {
    if (error.name === 'ConflictError') {
      return res.status(409).send({ error: error.message });
    };
    return res.status(500);
  };
};

export async function deleteManyNonSchoolDaysById(req: Request, res: Response) {
  const listIds = req.body;
  try{
    const count = await nonSchoolDaysService.deleteManyNonSchoolDaysById(listIds);
    return res.status(200).send(`${count} records were deleted`);
  } catch (error){
    if (error.name === 'NotFoundError') {
      return res.status(404).send({error: error.message});
    };
    return res.sendStatus(500);
  };
};