import { Request, Response } from 'express';
import { decodeJWT } from '../utils/jwt';

const currentUser = (req: Request, res: Response) => {
    const token = req.session?.jwt
    if(!token) {
        res.status(400).send({ currentUser: null })
    }
    console.log(req.session)
    const payload = decodeJWT(token);
    res.status(200).send({ currentUser: payload })
}

export default currentUser