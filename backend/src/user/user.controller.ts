import { BaseController } from '@common/BaseController';
import { RequestBody } from '@common/types';
import { NextFunction, Response } from 'express';
import { UserRegisterReqBody } from 'src/user/types';

import { UserService } from 'src/user/user.service';

export class UserController extends BaseController {
  private authService: UserService;

  constructor() {
    super();

    this.authService = new UserService();

    this.bindRoutes([
      {
        path: '/registration',
        method: 'post',
        func: this.register,
      },
      {
        path: '/login',
        method: 'post',
        func: this.login,
      },
      {
        path: '/logout',
        method: 'get',
        func: this.logout,
      },
    ]);
  }

  login = () => {};

  logout = () => {};

  register = async ({ body }: RequestBody<UserRegisterReqBody>, res: Response, next: NextFunction) => {
    const result = await this.authService.createUser(body.email, body.password);

    if (!result) {
      return this.send(res, 477, 'Пользователь уже существует');
    }

    this.ok(res, result);
  };
}
