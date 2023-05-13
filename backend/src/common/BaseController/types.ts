import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRoute {
  path: string;
  method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
  func: ControllerFunction;
  middleWares?: ControllerMiddleWares;
}

export type ControllerFunction = (req: Request, res: Response, next: NextFunction) => void;

export type ControllerMiddleWares = ControllerFunction[];
