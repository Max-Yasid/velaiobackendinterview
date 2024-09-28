import { NextFunction, Request, Response } from "express";

export type RouteController<T = any> = (
  req: Request<any, any, T>,
  res: Response,
  next: NextFunction
) => void;
