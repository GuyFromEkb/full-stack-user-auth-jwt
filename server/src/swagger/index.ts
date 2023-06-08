import swaggerUi from 'swagger-ui-express';

import { swaggerSpecification } from 'src/swagger/swaggerOptions';

const swaggerClient = {
  url: '/swagger/api-docs',
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpecification),
};

export { swaggerClient };
