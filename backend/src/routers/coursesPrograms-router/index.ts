import { deleteCourseProgramById, getCoursesPrograms, postManyCoursesProgramas } from '@/controllers/coursesPrograms-controller';
import { validateBody } from '@/middlewares';
import validateIdParameter from '@/middlewares/validationId-middleare';
import { courseProgramsArraySchema } from '@/schemas/coursesPrograms-schema';
import { Router } from 'express';

const coursesProgramsRouter = Router();

coursesProgramsRouter
  .get('/:id?',validateIdParameter, getCoursesPrograms)
  .post('/', validateBody(courseProgramsArraySchema), postManyCoursesProgramas)
  .delete('/:id', validateIdParameter, deleteCourseProgramById);

export { coursesProgramsRouter };