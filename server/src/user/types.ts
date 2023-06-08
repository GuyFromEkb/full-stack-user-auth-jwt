export interface IUser {
  email: string;
  password: string;
  isActivate: boolean;
  activateLink?: string;
}

export type UserRegisterReqBody = Pick<IUser, 'email' | 'password'>;
