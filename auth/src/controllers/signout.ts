import { Request, Response } from 'express';

const signOut = (req: Request, res: Response) => {
    req.session = null;

    res.status(200).send({})
}

export default signOut