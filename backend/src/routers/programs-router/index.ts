import { getPrograms, upsertPrograms } from "@/controllers/programs-controller";
import { validateBody } from "@/middlewares";
import { createProgramsSchema } from "@/schemas/programs-schemas";
import { Router } from "express";

const programsRouter = Router();

programsRouter
  .get('/:id?', getPrograms)
  .post('/:id?', validateBody(createProgramsSchema), upsertPrograms);

export { programsRouter };

