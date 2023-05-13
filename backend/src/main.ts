import { App } from 'src/app/app';
import { AppControllers, AppFilters } from 'src/app/types';
import { ExceptionFilter } from 'src/errors/exception.filter';
import { UserController } from 'src/user/user.controller';

const bootstrap = () => {
  const controllers: AppControllers = {
    user: new UserController().router,
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
