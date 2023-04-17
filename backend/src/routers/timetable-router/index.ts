import { createFullTimetable, postManyTimetable } from "@/controllers/timetable-controller";
import { validateBody } from "@/middlewares";
import { createManyTimeTableSchema } from "@/schemas/timetable-schemas";
import { Router } from "express";

const timeTableRouter = Router();

timeTableRouter
  .post('/', validateBody(createManyTimeTableSchema), postManyTimetable)
  .get('/createTimetable', createFullTimetable);
export { timeTableRouter };