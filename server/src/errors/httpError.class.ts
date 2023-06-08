export class HTTPError extends Error {
  constructor(message: string, public status: number, public errors?: unknown[]) {
    super(message);
  }

  static badRequest = (message: string, errors?: unknown[]) => {
    return new HTTPError(message, 400, errors);
  };

  static unValidated = (errors?: unknown[]) => {
    return new HTTPError('Неверно введённые данные', 422, errors);
  };

  static unAuthorized = (errors?: unknown[]) => {
    return new HTTPError('Пользователь не авторизован', 401, errors);
  };
}
