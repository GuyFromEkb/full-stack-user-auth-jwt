import { Request } from 'express';

export interface RequestBody<T> extends Request {
  body: T;
}

export interface AuthRequest<T = {}> extends Request {
  body: T & userAuthData;
}

export interface IJwtUserPayload {
  email: string;
  id: string;
  isActivated: boolean;
}
interface userAuthData {
  authUserData: IJwtUserPayload;
}
