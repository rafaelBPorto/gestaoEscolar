import { getCoursesPrograms } from '@/controllers/coursesPrograms-controller';
import { Router } from 'express';

const coursesProgramsRouter = Router();

coursesProgramsRouter
  .get('/:id?', getCoursesPrograms);

export { coursesProgramsRouter };