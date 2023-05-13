import { NextFunction, Response, Request } from 'express';
import { HTTPError } from 'src/errors/http-error.class';

export class ExceptionFilter {
  catch = (err: Error | HTTPError | any, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof HTTPError) {
      res.status(err.status).json({ message: err.message, errors: err.errors });
    } else {
      const errors = 'message' in err ? { errors: err.message } : undefined;

      errors
        ? res.status(500).json({ message: 'Неизвестная ошибка', errors })
        : res.status(500).json({ message: 'Неизвестная ошибка' });
    }
  };
}
