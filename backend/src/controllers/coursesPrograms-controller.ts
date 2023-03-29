import coursesProgramsService from "@/services/coursesPrograms-service";
import { CoursesPrograms } from "@prisma/client";
import { Request, Response } from "express";

export async function getCoursesPrograms(req: Request, res: Response) {
  try {
    const coursesPrograms: CoursesPrograms[] = await coursesProgramsService.getCoursesPrograms();
    return res.send(coursesPrograms);
  } catch (error) {
    return res.send(error);
  }
}