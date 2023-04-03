import { Prisma } from "@prisma/client";
import Joi from "joi";

export const createCoursesSchema = Joi.object<Prisma.CoursesCreateInput>({
  name: Joi.string().required(),
  courseCode: Joi.string().required(),
  workload: Joi.number().required(),
  fieldStudy: Joi.string().required(),
});