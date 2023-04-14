import { Prisma } from "@prisma/client";
import Joi from "joi";

export const createNonSchoolDaysSchema = Joi.object<Prisma.NonSchoolDaysCreateInput>({
  description: Joi.string().required(),
  type: Joi.string().valid('holiday', 'educational', 'recess').required(),
  shift: Joi.string().valid('Morning', 'Afternoon', 'Night').required(),
  date: Joi.date().iso().required()
});

export const createNonSchoolDaysArraySchema = Joi.array().items(createNonSchoolDaysSchema).min(1);