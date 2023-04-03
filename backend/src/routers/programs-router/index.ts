import { getPrograms, upsertPrograms } from "@/controllers/programs-controller";
import { Router } from "express";

const programsRouter = Router();

programsRouter
  .get('/:id?', getPrograms)
  .post('/:id?', upsertPrograms);

export { programsRouter };

