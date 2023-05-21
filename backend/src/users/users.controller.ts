import { NextFunction, Request, Response } from 'express';

import { BaseController } from '@common/BaseController';
import { userAuthorized } from '@common/middleWares';
import { UsersService } from 'src/users/users.service';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Получить всех зарегистрированных пользователей системы
 */
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
  /**
   * @swagger
   * /users/all:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     summary: возвращает всех зарегистрированных пользователей
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Массив пользователей
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */
  allUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getAllUsers();
      this.ok(res, { users });
    } catch (error) {
      next(error);
    }
  };
}
