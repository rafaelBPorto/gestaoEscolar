import Joi from 'joi';

export const paramsIdSchema = Joi.object({
  id: Joi.number().positive().integer(),
});

