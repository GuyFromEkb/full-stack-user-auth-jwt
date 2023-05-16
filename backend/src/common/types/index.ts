import { Request } from 'express';

export interface RequestBody<T> extends Request {
  body: T;
}

export interface AuthRequest<T = {}> extends Request {
  body: T & userAuthData;
}

interface userAuthData {
  authUserData: {
    email: string;
    id: string;
    isActivated: boolean;
  };
}
