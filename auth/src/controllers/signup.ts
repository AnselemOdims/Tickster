import { Request, Response } from 'express';
import { BadRequest } from '../errors';
import User from '../models/user'
import { generateJWT, decodeJWT } from '../utils/jwt'

const signUp = async (req: Request, res: Response) => {

    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if(existingUser) {
        throw new BadRequest('Email already in use')
    }
    const user = User.build({ name, email, password })
    await user.save()
    const token = generateJWT({ id: user.id, email: user.email })
    req.session = { jwt: token }

    res.status(201).send({ name: user.name, email: user.email, id: user.id})
}

export default signUp