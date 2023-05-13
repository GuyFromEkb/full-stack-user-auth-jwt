import { NextFunction, Request, Response } from 'express';

import { BaseController } from '@common/BaseController';
import { RequestBody } from '@common/types';
import { requestValidate } from '@common/utils';
import { configService } from '@config/config.service';
import { UserRegisterReqBody } from 'src/user/types';
import { UserService } from 'src/user/user.service';
import { userBodyValidation } from 'src/user/validation';

export class UserController extends BaseController {
  private userService: UserService;

  constructor() {
    super();

    this.userService = new UserService();

    this.bindRoutes([
      {
        path: '/registration',
        method: 'post',
        middleWares: [...userBodyValidation],
        func: this.register,
      },
      {
        path: '/login',
        method: 'post',
        middleWares: [...userBodyValidation],
        func: this.login,
      },
      {
        path: '/logout',
        method: 'get',
        func: this.logout,
      },
      {
        path: '/activate/:activateLink',
        method: 'get',
        func: this.activate,
      },
    ]);
  }

  login = async (req: RequestBody<UserRegisterReqBody>, res: Response, next: NextFunction) => {
    try {
      requestValidate(req);
      const result = await this.userService.login(req.body.email, req.body.password);

      res.cookie('refreshToken', result?.token.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      this.ok(res, result);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies as { refreshToken?: string };

      const result = await this.userService.logout(refreshToken);

      res.clearCookie('refreshToken');

      this.ok(res, result);
    } catch (error) {
      next(error);
    }
  };

  register = async (req: RequestBody<UserRegisterReqBody>, res: Response, next: NextFunction) => {
    try {
      requestValidate(req);

      const result = await this.userService.createUser(req.body.email, req.body.password);

      res.cookie('refreshToken', result?.token.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      this.ok(res, result);
    } catch (error) {
      next(error);
    }
  };

  activate = async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params as { activateLink: string };

    try {
      const result = await this.userService.activateUser(params.activateLink);
      if (result) res.redirect(configService.env.APP_URL);
    } catch (error) {
      next(error);
    }
  };
}
