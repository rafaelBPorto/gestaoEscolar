import { getCourses, upsertCourse } from '@/controllers/courses-controller';
import { validateBody } from '@/middlewares';
import { createCoursesSchema } from '@/schemas/courses-schemas';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/:id?', getCourses)
  .post('/:id?', validateBody(createCoursesSchema), upsertCourse);

export { coursesRouter };