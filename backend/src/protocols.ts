import { NextFunction, Request, Response } from "express";

export type ApplicationError = {
  name: string;
  message: string;
};

export type ValidationMiddleware = (
  req: Request, res: Response, next: NextFunction
  ) => void;