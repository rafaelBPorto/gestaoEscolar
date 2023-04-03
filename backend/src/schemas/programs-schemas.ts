import { Prisma } from "@prisma/client";
import Joi from "joi";

export const createProgramsSchema = Joi.object<Prisma.ProgramsCreateInput>({
  name:Joi.string().required(),
  fieldStudy: Joi.string().required()
});