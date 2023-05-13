import express, { Express, json } from 'express';
import { Server } from 'http';
import { AppControllers, AppFilters } from 'src/app/types';
import mongoose from 'mongoose';
import { configService } from '@config/config.service';
import cookieParser from 'cookie-parser';
import { logger } from '@common/Logger';
import cors from 'cors';

export class App {
  app: Express;
  server: Server;
  port: number;
  controllers: AppControllers;
  filters: AppFilters;

  constructor(config: { controllers: AppControllers; filters: AppFilters }) {
    this.app = express();
    this.port = 7777;
    this.controllers = config.controllers;
    this.filters = config.filters;
  }

  useMiddleware = () => {
    this.app.use(json());
    this.app.use(cookieParser());
    this.app.use(cors());
  };

  useRoutes = () => {
    this.app.use('/user', this.controllers.user);
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
      this.server = this.app.listen(this.port);
      logger.info(`Сервер запущен на http://localhost:${this.port}`);
    } catch (error) {
      logger.error('При инициализации сервера, произошла ошибка');
      logger.error(error);
    }
  };
}
