import { getPrograms, postProgram, putProgram } from "@/controllers/programs-controller";
import { validateBody } from "@/middlewares";
import validateIdParameter from "@/middlewares/validationId-middleare";
import { createProgramsSchema } from "@/schemas/programs-schemas";
import { Router } from "express";

const programsRouter = Router();

programsRouter
  .get('/:id?', validateIdParameter, getPrograms)
  .post('/', validateBody(createProgramsSchema), postProgram)
  .put(':id', validateIdParameter, validateBody(createProgramsSchema), putProgram);

export { programsRouter };

