import { deleteManyNonSchoolDaysById, getNonSchoolDays, postManyNonSchoolDays } from "@/controllers/nonSchoolDays-controller";
import { validateBody } from "@/middlewares";
import { createNonSchoolDaysArraySchema, deleteManyNonSchoolDaysByIdsSchema } from "@/schemas/nonSchoolDays-schema";
import { Router } from "express";

const nonSchoolDayRouter = Router();

nonSchoolDayRouter
  .get('/', getNonSchoolDays)
  .post('/', validateBody(createNonSchoolDaysArraySchema), postManyNonSchoolDays)
  .delete('/', validateBody(deleteManyNonSchoolDaysByIdsSchema), deleteManyNonSchoolDaysById);

  export { nonSchoolDayRouter };