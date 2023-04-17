import { createFullTimetable, postManyTimetable } from "@/controllers/timetable-controller";
import { validateBody } from "@/middlewares";
import { createManyTimeTableSchema, generateClassScheduleSchema } from "@/schemas/timetable-schemas";
import { Router } from "express";

const timeTableRouter = Router();

timeTableRouter
  .post('/', validateBody(createManyTimeTableSchema), postManyTimetable)
  .post('/generateClassSchedule', validateBody(generateClassScheduleSchema), createFullTimetable);
export { timeTableRouter };