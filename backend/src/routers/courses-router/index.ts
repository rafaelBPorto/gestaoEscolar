import { getCourses, postCourse } from '@/controllers/courses-controller';
import { validateBody } from '@/middlewares';
import validateIdParameter from '@/middlewares/validationId-middleare';
import { createCoursesSchema } from '@/schemas/courses-schemas';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/:id?', validateIdParameter, getCourses)
  .post('/', validateBody(createCoursesSchema), postCourse)
  .put('/id', validateIdParameter, validateBody(createCoursesSchema));

export { coursesRouter };