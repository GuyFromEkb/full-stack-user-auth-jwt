import { BaseController } from '@common/BaseController';
import { NextFunction, Response, Request } from 'express';
import { userAuthorized } from '@common/middleWares';
import { UsersService } from 'src/users/users.service';

export class UsersController extends BaseController {
  private usersService: UsersService;

  constructor() {
    super();

    this.usersService = new UsersService();

    this.bindRoutes([
      {
        path: '/all',
        method: 'get',
        middleWares: [userAuthorized],
        func: this.allUsers,
      },
    ]);
  }

  allUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getAllUsers();
      this.ok(res, { users });
    } catch (error) {
      next(error);
    }
  };
}
