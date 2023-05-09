import express, { Express, json } from 'express';
import { Server } from 'http';
import { AppControllers } from 'src/app/types';
import mongoose from 'mongoose';

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

  init = async () => {
    await mongoose.connect(
      'mongodb+srv://jwtauth:q1w2e3r4t5@jwt-auth.qn78np4.mongodb.net/?retryWrites=true&w=majority'
    );

    this.useMiddleware();
    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log(`Сервер запущен на http://localhost:${this.port}`);
  };
}
