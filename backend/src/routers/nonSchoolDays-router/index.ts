import postManyNonSchoolDays from "@/controllers/nonSchoolDays-controller";
import { validateBody } from "@/middlewares";
import { createNonSchoolDaysArraySchema } from "@/schemas/nonSchoolDays-schema";
import { Router } from "express";

const nonSchoolDayRouter = Router();

nonSchoolDayRouter
  .post('/', validateBody(createNonSchoolDaysArraySchema), postManyNonSchoolDays);

export { nonSchoolDayRouter};