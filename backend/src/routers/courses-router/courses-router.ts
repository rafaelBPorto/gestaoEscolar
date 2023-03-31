import { getCourses, upsertCourse } from '@/controllers/courses-controller';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/', getCourses)
  .post('/:id?', upsertCourse)

export { coursesRouter };