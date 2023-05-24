import CustomError  from './customError';

class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    constructor(public error: string) {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.error }
        ]
    }
}

export default DatabaseConnectionError