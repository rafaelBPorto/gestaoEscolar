import { getCourses, upsertCourse } from '@/controllers/courses-controller';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/:id?', getCourses)
  .post('/:id?', upsertCourse);

export { coursesRouter };