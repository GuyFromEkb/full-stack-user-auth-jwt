import express, { Express, json } from 'express';
import { Server } from 'http';
import { AppControllers } from 'src/app/types';
import mongoose from 'mongoose';
import { configService } from '@config/config.service';
import cookieParser from 'cookie-parser';
import { logger } from '@common/Logger';

export class App {
  app: Express;
  server: Server;
  port: number;
  controllers: AppControllers;

  constructor(config: { controllers: AppControllers }) {
    this.app = express();
    this.port = 7777;
    this.controllers = config.controllers;
  }

  useMiddleware() {
    this.app.use(json());
    this.app.use(cookieParser());
  }

  useRoutes() {
    this.app.use('/user', this.controllers.user);
  }

  init = async () => {
    await mongoose.connect(configService.env.MONGODB_URL);

    this.useMiddleware();
    this.useRoutes();
    this.server = this.app.listen(this.port);
    logger.info(`Сервер запущен на http://localhost:${this.port}`);
  };
}
