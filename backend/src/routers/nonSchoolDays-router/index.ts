import postManyNonSchoolDays from "@/controllers/nonSchoolDays-controller";
import { Router } from "express";

const nonSchoolDayRouter = Router();

nonSchoolDayRouter
  .post('/', postManyNonSchoolDays);

export { nonSchoolDayRouter};