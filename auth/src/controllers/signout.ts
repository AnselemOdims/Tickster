import { Request, Response } from 'express';

const signOut = (req: Request, res: Response) => {
    req.session = null;

    res.send({})
}

export default signOut