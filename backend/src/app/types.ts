import { Router } from 'express';

import { ExceptionFilter } from 'src/errors/exception.filter';

type ControllerKey = 'user' | 'users';

export type AppControllers = { [key in ControllerKey]: Router };
export type AppFilters = { exception: ExceptionFilter };
