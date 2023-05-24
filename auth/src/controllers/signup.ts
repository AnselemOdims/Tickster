import { Request, Response } from 'express';

const signUp = (req: Request, res: Response) => {
    const { name, email, password } = req.body
}

export default signUp