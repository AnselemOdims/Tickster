import { ValidationError } from "express-validator";

class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}

export default RequestValidationError;