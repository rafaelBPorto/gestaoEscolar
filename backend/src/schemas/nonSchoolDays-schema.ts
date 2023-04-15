import { Prisma } from "@prisma/client";
import Joi from "joi";
import { paramsIdSchema } from "./params-schemas";

export const createNonSchoolDaysSchema = Joi.object<Prisma.NonSchoolDaysCreateInput>({
  description: Joi.string().required(),
  type: Joi.string().valid('holiday', 'educational', 'recess').required(),
  shift: Joi.string().valid('Morning', 'Afternoon', 'Night').required(),
  date: Joi.date().iso().required()
});

export const createNonSchoolDaysArraySchema = Joi.array().items(createNonSchoolDaysSchema).min(1);

export const deleteManyNonSchoolDaysByIdsSchema = Joi.array().items(Joi.number()).min(1);

