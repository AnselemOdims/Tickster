import CustomError from "./customError";

class BadRequest extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super();

        Object.setPrototypeOf(this, BadRequest.prototype);
    }

    serializeErrors() {
        return [
            { message: this.message}
        ]
    }
}

export default BadRequest;