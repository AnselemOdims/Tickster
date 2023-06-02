import CustomError from './customError';

class NotAuthorized extends CustomError {
  statusCode = 401;

  constructor(public message: string) {
    super();

    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default NotAuthorized;
