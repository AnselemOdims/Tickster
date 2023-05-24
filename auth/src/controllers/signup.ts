import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError, DatabaseConnectionError } from '../errors';

const signUp = (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    const { name, email, password } = req.body
    throw new DatabaseConnectionError('Error connecting to database')
    res.send({ name, email, password })
}

export default signUp