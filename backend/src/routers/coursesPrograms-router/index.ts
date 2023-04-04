import { getCoursesPrograms, postManyCoursesProgramas } from '@/controllers/coursesPrograms-controller';
import { validateBody } from '@/middlewares';
import { courseProgramsArraySchema } from '@/schemas/coursesPrograms-schema';
import { Router } from 'express';

const coursesProgramsRouter = Router();

coursesProgramsRouter
  .get('/:id?', getCoursesPrograms)
  .post("/", validateBody(courseProgramsArraySchema), postManyCoursesProgramas);


export { coursesProgramsRouter };