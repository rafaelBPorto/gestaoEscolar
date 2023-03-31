import coursesService from '@/services/courses-service';
import { Courses, Prisma } from '@prisma/client';
import { Request, Response } from 'express';

export async function getCourses(req: Request, res: Response) {
  const programId: number = Number(req.params.id);
  try {
    const courses: Courses[] | Courses = await coursesService.getCourses(programId);
    return res.send(courses);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
}

export async function upsertCourse(req: Request, res: Response) {
  const course: Prisma.CoursesCreateInput = req.body;
  const idCourse: number | undefined = Number(req.params.id);

  try {
    const createdOrUpdatedCourse: Courses = await coursesService.upsertCourse(course, idCourse);
    return res.send(createdOrUpdatedCourse);
  } catch (error) {
    return res.send(error);
  }
}