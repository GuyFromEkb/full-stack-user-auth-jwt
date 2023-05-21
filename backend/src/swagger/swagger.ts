import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { swaggerUserSchema } from 'src/user/user.model';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'İlaç Takip Sistemi API',
      version: '2.0.0',
      description: 'ITS API Swagger',
    },
    servers: [
      {
        url: `http://localhost:7777`,
      },
    ],
    components: {
      schemas: {
        ...swaggerUserSchema,
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access these api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['src/**/*.ts'], // files containing annotations as above
};

const specification = swaggerJSDoc(options);

export const swaggerClient = {
  url: '/api-docs',
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specification),
};
