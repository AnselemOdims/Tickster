import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError, BadRequest } from '../errors';
import User from '../models/user'
import { generateJWT, decodeJWT } from '../utils/jwt'

const signUp = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }

    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if(existingUser) {
        throw new BadRequest('Email already in use')
    }
    const user = User.build({ name, email, password })
    await user.save()
    const token = generateJWT({ id: user.id, email: user.email })
    req.session = { jwt: token }
    
    res.status(201).send(user)
}

export default signUp