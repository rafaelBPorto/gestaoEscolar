import { getNonSchoolDays, postManyNonSchoolDays } from "@/controllers/nonSchoolDays-controller";
import { validateBody } from "@/middlewares";
import { createNonSchoolDaysArraySchema } from "@/schemas/nonSchoolDays-schema";
import { Router } from "express";

const nonSchoolDayRouter = Router();

nonSchoolDayRouter
  .get('/', getNonSchoolDays)
  .post('/', validateBody(createNonSchoolDaysArraySchema), postManyNonSchoolDays);

export { nonSchoolDayRouter };