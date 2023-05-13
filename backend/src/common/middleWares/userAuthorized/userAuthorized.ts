import { NextFunction, Request, Response } from 'express';

import { HTTPError } from 'src/errors/httpError.class';
import { tokenService } from 'src/token';

export const userAuthorized = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;

    const accessToken = authorizationHeader?.split(' ')?.[1];

    if (!accessToken) {
      throw HTTPError.unAuthorized();
    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      throw HTTPError.unAuthorized();
    }

    next();
  } catch (error) {
    next(error);
  }
};
