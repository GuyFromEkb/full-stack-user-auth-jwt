import express, { Express, json } from 'express';
import { Server } from 'http';
import { AppControllers } from 'src/app/types';

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
  }

  useRoutes() {
    this.app.use('/user', this.controllers.user);
  }

  init = () => {
    this.useMiddleware();
    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log(`Сервер запущен на http://localhost:${this.port}`);
  };
}
