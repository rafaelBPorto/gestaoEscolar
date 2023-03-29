import coursesProgramsService from "@/services/coursesPrograms-service";
import { Request, Response } from "express";

export async function getCoursesPrograms(req: Request, res: Response) {
  try {
    const coursesPrograms = await coursesProgramsService.getCoursesPrograms();
    return res.send(coursesPrograms);
  } catch (error) {
    return res.send(error);
  }
}