import coursesProgramsService from '@/services/coursesPrograms-service';
import { CoursesPrograms } from '@prisma/client';
import { Request, Response } from 'express';

export async function getCoursesPrograms(req: Request, res: Response) {
  const coursesProgramsId = Number(req.params.id);
  
  try {
    const coursesPrograms: CoursesPrograms[] | CoursesPrograms = await coursesProgramsService.getCoursesPrograms(coursesProgramsId);
    return res.send(coursesPrograms);
  } catch (error) {
    return res.status(404).send(error);
  };
};

export async function postManyCoursesProgramas(req:Request, res:Response) {
  const  coursesPrograms : CoursesPrograms[] = req.body;
  
  try{
    await coursesProgramsService.postCreateManyCoursesPrograms(coursesPrograms);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(409).send(error);
  };
};

export async function deleteCourseProgramById(req:Request, res:Response) {
  const courseProgramId: number = Number(req.params.id);

  try {
    await coursesProgramsService.deleteCoursesProgramsById(courseProgramId);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send(error);
  };
};
