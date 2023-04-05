import { getCourses, upsertCourse } from '@/controllers/courses-controller';
import { validateBody } from '@/middlewares';
import validateIdParameter from '@/middlewares/validationId-middleare';
import { createCoursesSchema } from '@/schemas/courses-schemas';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/:id?', validateIdParameter, getCourses)
  .post('/:id?', validateIdParameter, validateBody(createCoursesSchema), upsertCourse);

export { coursesRouter };