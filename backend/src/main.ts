import { App } from 'src/app/app';
import { AppControllers } from 'src/app/types';
import { UserController } from 'src/user/user.controller';

const bootstrap = () => {
  const controllers: AppControllers = {
    user: new UserController().router,
  };

  const app = new App({
    controllers,
  });

  app.init();
};

bootstrap();
