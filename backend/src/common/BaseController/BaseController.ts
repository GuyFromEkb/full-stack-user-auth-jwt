import { Router, Response } from 'express';
import { IControllerRoute } from './types';

export abstract class BaseController {
  private readonly _route: Router;

  constructor() {
    this._route = Router();
  }

  send<T>(res: Response, code: number, message: T) {
    res.type('application/json');
    return res.status(code).json(message);
  }

  ok<T>(res: Response, message: T) {
    return this.send<T>(res, 200, message);
  }

  protected bindRoutes = (route: IControllerRoute[]) => {
    route.forEach(({ path, method, func, middleWares }) => {
      const pipelines = middleWares ? [...middleWares, func] : func;

      this._route[method](path, pipelines);
    });
  };

  get router() {
    return this._route;
  }
}
