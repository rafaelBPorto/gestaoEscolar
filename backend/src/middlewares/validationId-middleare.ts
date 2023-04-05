import { paramsIdSchema } from "@/schemas/params-schemas";
import { NextFunction, Request, Response } from "express";

export default function validateIdParameter(req: Request, res: Response, next: NextFunction): void | Response<any> {
  const { id } = req.params;

  const { error } = paramsIdSchema.validate({ id });

  if (!error) {
    return next();
  }
  else {
    return res.status(400).send({
      message: 'Invalid parameter',
      details: error.details,
    });
  };
};

