const responseBaseUserBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'john.snow@email.com',
    },
    id: {
      type: 'string',
      description: 'user Id',
      example: '64600d8f1422f2e5e90af9a0',
    },
    isActivated: {
      type: 'boolean',
      description: 'is user Activated',
      example: false,
    },
    activateLink: {
      type: 'string',
      description: 'ссылка для активации пользователя',
      example: 'http://localhost:7777/user/activate/ac8cbcd6-1dfb-4e24-851b-544444f88b8e',
    },
  },
  required: ['email', 'id', 'isActivated'],
};

const authUserBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'testim@ulivi.ru',
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '123456789',
    },
  },
  required: ['email', 'password'],
};

const postRegisterUser = {
  tags: ['User'],
  description: 'Создание пользователя',
  operationId: 'registerUser',
  summary: 'Создание нового пользователя',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/authUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'пользователь создан',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/responseUser',
          },
        },
      },
    },
  },
};

const postLoginUser = {
  tags: ['User'],
  description: 'LoginUser',
  operationId: 'loginUser',
  summary: 'Логин юзера',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/authUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'вы успешно зашли в систему!',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/responseUser',
          },
        },
      },
    },
  },
};

const responseUser = {
  type: 'object',
  properties: {
    user: {
      $ref: '#/components/schemas/responseBaseUserBody',
    },
    token: {
      $ref: '#/components/schemas/responseToken',
    },
  },
  required: ['user', 'token'],
};

const responseToken = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbUB1bGl2aS5ydSIsImlkIjoiNjQ2MDBkOGYxNDIyZjJlNWU5MGFmOWEwIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY4NDY3ODUzNCwiZXhwIjoxNjg0Njc4NTY0fQ.iW2pQ8ngE_BcxoxcGzFO3vLlmB6kOENNPI3GatLG5S4',
    },
  },
  required: ['accessToken'],
};

const getGetOwnUser = {
  tags: ['User'],
  description: 'Получение текущего пользователя по accessToken (который берётся из заголовка bearerAuth)',
  operationId: 'getOwnUser',
  summary: 'Получение текущего пользователя по accessToken',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'текущий авторизованный пользователь',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/responseUser',
          },
        },
      },
    },
  },
};

const getRefreshAccess = {
  tags: ['User'],
  description: 'берёт refreshToken из cookie и если с ним всё ок, генерирует новые токены',
  operationId: 'refreshAccess',
  summary: 'Обновления access Токена',
  security: [
    {
      cookieAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'новый access токен',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/responseToken',
          },
        },
      },
    },
  },
};

const getLogout = {
  tags: ['User'],
  description: 'удаляет аксес пользователя, чистит cookie',
  operationId: 'logout',
  summary: 'logout',
  security: [
    {
      cookieAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'успех!',
    },
  },
};

export const userDoc = {
  tag: {
    name: 'User',
    description: 'Авторизация пользователя',
  },
  schemas: { responseUser, responseToken, authUserBody, responseBaseUserBody },
  paths: {
    '/user/login': {
      post: postLoginUser,
    },
    '/user/registration': {
      post: postRegisterUser,
    },
    '/user/getOwnUser': {
      get: getGetOwnUser,
    },
    '/user/refreshAccess': {
      get: getRefreshAccess,
    },
    '/user/logout': {
      get: getLogout,
    },
  },
};
