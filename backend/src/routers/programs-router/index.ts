import getPrograms from "@/controllers/programs-controller";
import { Router } from "express";

const programsRouter = Router();

programsRouter
  .get('/', getPrograms);

export { programsRouter };

