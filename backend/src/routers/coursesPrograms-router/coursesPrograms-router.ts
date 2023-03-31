import { getCoursesPrograms } from '@/controllers/coursesPrograms-controller';
import { Router } from 'express';

const coursesProgramsRouter = Router();

coursesProgramsRouter
  .get('/', getCoursesPrograms)

export { coursesProgramsRouter };