import swaggerJSDoc from 'swagger-jsdoc';

import { configService } from '@config/config.service';
import { swaggerUserSchema } from 'src/user/user.model';
import { userDoc } from 'src/user/user.swagger';
import { usersDoc } from 'src/users/users.swagger';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    externalDocs: {
      description: `${configService.env.SERVER_URL}/swagger/v1/doc/swagger.json`,
      url: `${configService.env.SERVER_URL}/swagger/v1/doc/swagger.json`,
    },
    info: {
      title: 'JWT AUTH USER',
      version: '1.0.0',
      description: 'ITS API Swagger',
    },
    servers: [
      {
        url: configService.env.SERVER_URL,
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
      ...usersDoc.paths,
    },
    tags: [userDoc.tag, usersDoc.tag],
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

export const swaggerSpecification = swaggerJSDoc(options);
