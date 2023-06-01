import { Request, Response } from 'express';

const signIn = (req: Request, res: Response) => {

    res.status(200).send('Login successful')
}

export default signIn