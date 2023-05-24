import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const signUp = (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).send(errors.array()[0])
    }
    const { name, email, password } = req.body

    res.send({ name, email, password })
}

export default signUp