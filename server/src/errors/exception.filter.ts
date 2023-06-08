import { NextFunction, Request, Response } from 'express';

import { HTTPError } from 'src/errors/httpError.class';

export class ExceptionFilter {
  catch = (err: Error | HTTPError | any, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof HTTPError) {
      res.status(err.status).json({ message: err.message, errors: err.errors });
    } else if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Неизвестная ошибка' });
    }
  };
}
