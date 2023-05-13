import { Request } from 'express';
import { validationResult } from 'express-validator';

import { HTTPError } from 'src/errors/httpError.class';

export const requestValidate = (req: Request) => {
  const validResult = validationResult(req);
  if (!validResult.isEmpty()) {
    throw HTTPError.unValidated(validResult.array());
  }
};
