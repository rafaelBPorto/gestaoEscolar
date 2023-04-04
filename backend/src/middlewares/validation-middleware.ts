import { NextFunction, Request, Response } from "express";
import { ArraySchema, ObjectSchema } from "joi";

export function validateBody<T>(shema: ObjectSchema<T> | ArraySchema): ValidationMiddleware {
  return validate(shema, "body");
};

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "params");
}

function validate(schema: ObjectSchema | ArraySchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      const errors = error.details.map(detail => detail.message);
      return res.status(400).send({ message: errors });
    }
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;