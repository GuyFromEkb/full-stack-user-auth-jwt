export class HTTPError extends Error {
  constructor(message: string, public status: number, public errors?: unknown[]) {
    super(message);
  }

  static badRequest = (message: string, errors?: unknown[]) => {
    return new HTTPError(message, 400, errors);
  };
}