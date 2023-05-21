import { NextFunction, Request, Response } from 'express';

import { BaseController } from '@common/BaseController';
import { logger } from '@common/Logger';
import { userAuthorized } from '@common/middleWares';
import { AuthRequest, RequestBody } from '@common/types';
import { requestValidate } from '@common/utils';
import { configService } from '@config/config.service';
import { UserDto } from 'src/user/dto/userDto';
import { UserRegisterReqBody } from 'src/user/types';
import { userModel } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { userBodyValidation } from 'src/user/validation';

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Авторизация пользователя
 */

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
      {
        path: '/getOwnUser',
        method: 'get',
        middleWares: [userAuthorized],
        func: this.sendUserByToken,
      },
      {
        path: '/refreshAccess',
        method: 'get',
        func: this.refreshAccess,
      },
      {
        path: '/test',
        method: 'get',
        middleWares: [userAuthorized],
        func: this.test,
      },
    ]);
  }

  test = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(req.cookies);

      const all = (await userModel.find()).map((item) => new UserDto(item));
      this.ok(res, all);
    } catch (error) {
      next(error);
    }
  };

  refreshAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies as { refreshToken?: string };

      const { token } = await this.userService.refresh(refreshToken);

      res.cookie('refreshToken', token.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'none',
        secure: true,
      });

      this.ok(res, { accessToken: token.accessToken });
    } catch (error) {
      next(error);
    }
  };

  sendUserByToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getUserById(req.body.authUserData.id);
      this.ok(res, user);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: RequestBody<UserRegisterReqBody>, res: Response, next: NextFunction) => {
    try {
      requestValidate(req);
      const result = await this.userService.login(req.body.email, req.body.password);

      res.cookie('refreshToken', result?.token.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'none',
        secure: true,
      });

      const response = {
        user: result.user,
        token: {
          accessToken: result.token.accessToken,
        },
      };

      this.ok(res, response);
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
        sameSite: 'none',
        secure: true,
      });

      const response = {
        user: result.user,
        token: {
          accessToken: result.token.accessToken,
        },
      };

      this.ok(res, response);
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
