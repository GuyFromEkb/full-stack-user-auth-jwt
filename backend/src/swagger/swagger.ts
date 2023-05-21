import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { swaggerUserSchema } from 'src/user/user.model';
import { userDoc } from 'src/user/user.swagger';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JWT AUTH USER',
      version: '1.0.0',
      description: 'ITS API Swagger',
    },
    servers: [
      {
        url: `http://localhost:7777/`,
      },
    ],
    components: {
      schemas: {
        ...swaggerUserSchema,
        ...userDoc.schemas,
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          description: 'Bearer token to access these api endpoints',
        },
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'refreshToken',
        },
      },
    },
    paths: {
      ...userDoc.paths,
    },
    security: [
      {
        bearerAuth: [],
      },
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ['src/**/*.ts'],
};

const specification = swaggerJSDoc(options);

export const swaggerClient = {
  url: '/api-docs',
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specification),
};
