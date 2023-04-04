import { Prisma } from "@prisma/client";
import Joi from "joi";

export const courseProgramsSchema = Joi.array().items(
  Joi.object<Prisma.CoursesProgramsCreateManyInput>({
    name: Joi.string().required(),
    idCourse: Joi.number().integer().required(),
    idProgram: Joi.number().integer().required(),
  })
);