import { getCourses, upsertCourse } from '@/controllers/courses-controller';
import { Router } from 'express';

const coursesRouter = Router();


coursesRouter
  .get('/', getCourses)
  .post('/', upsertCourse)
  .put('/:id', upsertCourse)

export { coursesRouter };