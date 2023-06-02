import { NextFunction, Request, Response } from "express";
import { NotAuthorized } from "../errors";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.currentUser) {
        throw new NotAuthorized('Not authorized')
    }
    next();
}

export default requireAuth;