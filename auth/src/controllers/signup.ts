import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError, DatabaseConnectionError } from '../errors';
import User from '../models/user'

const signUp = (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    const { name, email, password } = req.body
    const existingUser = User.findOne({ email })
    // if(existingUser) {

    // }
    // const user = User.build({ name, email, password })
    res.send({ name, email, password })
}

export default signUp