import CustomError from './customError';

class NotFound extends CustomError {
  statusCode = 404;

  constructor() {
    super();

    Object.setPrototypeOf(this, NotFound.prototype);
  }

  serializeErrors() {
    return [{ message: 'Route not found' }];
  }
}

export default NotFound;
