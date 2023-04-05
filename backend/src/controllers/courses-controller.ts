import coursesService from '@/services/courses-service';
import { Courses, Prisma } from '@prisma/client';
import { Request, Response } from 'express';

export async function getCourses(req: Request, res: Response) {
  const programId: number = Number(req.params.id);
  try {
    const courses: Courses[] | Courses = await coursesService.getCourses(programId);
    return res.send(courses);
  } catch (error) {
    return res.status(404).send(error);
  };
};

export async function postCourse(req: Request, res: Response) {
  const course: Prisma.CoursesCreateInput = req.body;

  try {
    const newCourse : Courses = await coursesService.postCourse(course);
    return res.status(201).send(newCourse);
  } catch (error) {
    return res.status(409).send(error);
  };
};

export async function updateCourse(req: Request, res: Response) {
  const course: Prisma.CoursesCreateInput = req.body;
  const idCourse: number = Number(req.params.id);

  try {
    const createdOrUpdatedCourse: Courses = await coursesService.updateCourse(course, idCourse);
    return res.send(createdOrUpdatedCourse);
  } catch (error) {
    return res.send(error);
  }
}
