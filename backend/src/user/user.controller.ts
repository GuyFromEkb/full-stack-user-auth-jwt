import { BaseController } from '@common/BaseController';
import { RequestBody } from '@common/types';
import { NextFunction, Response, Request } from 'express';
import { UserRegisterReqBody } from 'src/user/types';
import { UserService } from 'src/user/user.service';
import { registerBodyValidation } from 'src/user/validation';
import { requestValidate } from '@common/utils';

export class UserController extends BaseController {
  private authService: UserService;

  constructor() {
    super();

    this.authService = new UserService();

    this.bindRoutes([
      {
        path: '/registration',
        method: 'post',
        middleWares: [...registerBodyValidation],
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
      {
        path: '/activate/:activateLink',
        method: 'get',
        func: this.activate,
      },
    ]);
  }

  login = () => {};

  logout = () => {};

  register = async (req: RequestBody<UserRegisterReqBody>, res: Response, next: NextFunction) => {
    try {
      requestValidate(req);

      const { body } = req;
      const result = await this.authService.createUser(body.email, body.password);

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
      const result = await this.authService.activateUser(params.activateLink);
      this.ok(res, result);
    } catch (error) {
      next(error);
    }
  };
}
