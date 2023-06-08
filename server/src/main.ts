import { App } from 'src/app/app';
import { AppControllers, AppFilters } from 'src/app/types';
import { ExceptionFilter } from 'src/errors/exception.filter';
import { UserController } from 'src/user/user.controller';
import { UsersController } from 'src/users/users.controller';

const bootstrap = () => {
  const controllers: AppControllers = {
    user: new UserController().router,
    users: new UsersController().router,
  };

  const filters: AppFilters = {
    exception: new ExceptionFilter(),
  };

  const app = new App({
    controllers,
    filters,
  });

  app.init();
};

bootstrap();
