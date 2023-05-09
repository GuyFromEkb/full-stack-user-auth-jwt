import { RequestBody } from '@common/types';
import { NextFunction, Request, Response, Router } from 'express';
import { BaseController } from 'src/common/BaseController';
import { IUserPostDataResBody } from 'src/user/types';

export class UserController extends BaseController {
  constructor() {
    super();

    this.bindRoutes([
      {
        path: '/info',
        method: 'get',
        func: this.getUser,
      },
      {
        path: '/login',
        method: 'post',
        func: this.postData,
      },
    ]);
  }

  getUser = (req: Request, res: Response, next: NextFunction) => {
    this.ok(res, 'Вот данные пользователя!!!выфвыф ');
  };

  postData = ({ body }: RequestBody<IUserPostDataResBody>, res: Response, next: NextFunction) => {
    console.log('body', body.email);
    console.log('body', body.password);

    this.ok(res, 'данные пользователя получены');
  };
}
