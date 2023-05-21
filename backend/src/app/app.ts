import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, json } from 'express';
import { Server } from 'http';
import mongoose from 'mongoose';

import { logger } from '@common/Logger';
import { configService } from '@config/config.service';
import { AppControllers, AppFilters } from 'src/app/types';
import { swaggerClient } from 'src/swagger';

export class App {
  app: Express;
  server: Server;
  port: number;
  controllers: AppControllers;
  filters: AppFilters;

  constructor(config: { controllers: AppControllers; filters: AppFilters }) {
    this.app = express();
    this.port = configService.env.SERVER_PORT;
    this.controllers = config.controllers;
    this.filters = config.filters;
  }

  useMiddleware = () => {
    this.app.use(json());
    this.app.use(cookieParser());
    this.app.use(
      cors({
        origin: true,
        credentials: true,
      })
    );

    this.app.use(async (_req, _res, next) => {
      await new Promise((r) => {
        setTimeout(() => {
          r('');
        }, 550);
      });
      next();
    });
  };

  useSwagger = () => {
    this.app.use(swaggerClient.url, swaggerClient.serve, swaggerClient.setup);
  };

  useRoutes = () => {
    this.app.use('/user', this.controllers.user);
    this.app.use('/users', this.controllers.users);
  };

  useExceptionFilter = () => {
    this.app.use(this.filters.exception.catch);
  };

  init = async () => {
    try {
      await mongoose.connect(configService.env.MONGODB_URL);

      this.useMiddleware();
      this.useRoutes();
      this.useExceptionFilter();
      this.useSwagger();
      this.server = this.app.listen(this.port);
      logger.info(`Сервер запущен на http://localhost:${this.port}`);
    } catch (error) {
      logger.error('При инициализации сервера, произошла ошибка');
      logger.error(error);
    }
  };
}
