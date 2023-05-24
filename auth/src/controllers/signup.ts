import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const signUp = (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        throw new Error(errors.array())
    }
    const { name, email, password } = req.body

    res.send({ name, email, password })
}

export default signUp