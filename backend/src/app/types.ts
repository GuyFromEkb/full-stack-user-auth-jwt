import { Router } from 'express';

type ControllerKey = 'user';

export type AppControllers = { [key in ControllerKey]: Router };
