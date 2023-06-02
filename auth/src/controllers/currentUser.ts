import { Request, Response } from 'express';

const currentUser = (req: Request, res: Response) => {
    res.status(200).send({ currentUser: req.currentUser || null })
}

export default currentUser