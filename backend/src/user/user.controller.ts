import { BaseController } from '@common/BaseController';
import { RequestBody } from '@common/types';
import { NextFunction, Response, Request } from 'express';
import { UserRegisterReqBody } from 'src/user/types';
import { UserService } from 'src/user/user.service';
import { userBodyValidation } from 'src/user/validation';
import { requestValidate } from '@common/utils';
import { configService } from '@config/config.service';
import { HTTPError } from 'src/errors/httpError.class';
import { tokenService } from 'src/token';

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
        path: '/all',
        method: 'get',
        middleWares: [usersMiddleWare],
        func: this.allUsers,
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

  allUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAllUsers();
      this.ok(res, { users });
    } catch (error) {
      next(error);
    }
  };
}

const usersMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      throw HTTPError.unAuthorized();
    }

    const accessToken = authorizationHeader.split(' ')?.[1];

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
