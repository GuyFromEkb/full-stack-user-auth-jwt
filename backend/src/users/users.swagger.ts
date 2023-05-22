const getAllUsers = {
  tags: ['Users'],
  description: 'Получает всех зарегистрированых пользователей',
  operationId: 'getAllUsers',
  summary: 'что бы получить пользователей, нужно быть авторизованным',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Зарегистрированные пользователи',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/responseBaseUserBody',
            },
          },
        },
      },
    },
  },
};

export const usersDoc = {
  tag: {
    name: 'Users',
    description: 'Получить всех зарегистрированных пользователей системы',
  },
  paths: {
    '/users/all': {
      get: getAllUsers,
    },
  },
};
