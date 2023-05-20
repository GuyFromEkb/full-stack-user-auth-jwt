import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { swaggerUserSchema } from 'src/user/user.model';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'USER JWT AUTH',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:7777',
      },
    ],
    components: {
      schemas: {
        ...swaggerUserSchema,
      },
    },
  },
  apis: ['src/**/*.ts'], // files containing annotations as above
};

const specification = swaggerJSDoc(options);

export const swaggerClient = {
  url: '/api-docs',
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specification),
};
