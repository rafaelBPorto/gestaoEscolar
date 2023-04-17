import timeTableService from "@/services/timetable-service";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

export async function postManyTimetable(req: Request, res: Response) {
  const metadates: Prisma.TimetableCreateManyInput[] = req.body;
  try {
    const countPosts = await timeTableService.postManyTimetable(metadates);
    return res.sendStatus(201);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send({ error: error.message });
    };
    return res.sendStatus(500);
  };
};

export async function createFullTimetable(req: Request, res: Response) {
  try {
    const coursesProgram = await timeTableService.generateClassSchedule(1, 4, '2024-01-01');
    return res.send(coursesProgram);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send({ error: error.message });
    };
    return res.sendStatus(500);
  }
}