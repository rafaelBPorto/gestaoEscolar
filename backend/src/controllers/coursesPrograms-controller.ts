import coursesProgramsService from "@/services/coursesPrograms-service";
import { CoursesPrograms } from "@prisma/client";
import { Request, Response } from "express";

export async function getCoursesPrograms(req: Request, res: Response) {
  const coursesProgramsId = Number(req.params.id);
  try {
    const coursesPrograms: CoursesPrograms[] | CoursesPrograms = await coursesProgramsService.getCoursesPrograms(coursesProgramsId);
    return res.send(coursesPrograms);
  } catch (error) {
    return res.send(error);
  }
}