import { Prisma } from "@prisma/client";
import Joi from "joi";

export const createTimeTableSchema = Joi.object<Prisma.TimetableCreateManyInput>({
  idCourse: Joi.number().integer().min(1).required(),
  idProgram: Joi.number().integer().min(1).required(),
  startClass: Joi.date().iso().required(),
  endClass:Joi.date().iso().greater(Joi.ref('startClass')).required()
});

export const createManyTimeTableSchema = Joi.array().items(createTimeTableSchema);