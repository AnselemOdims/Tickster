import { NextFunction, Request, Response } from "express";
import { decodeJWT } from "../utils/jwt";

declare global {
    namespace Express {
        interface Request {
            currentUser?: any
        }
    }
}

const currentUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.session?.jwt;
    if(!token) {
        return next();
    }
    const payload = decodeJWT(token);
    req.currentUser = payload;
    next();
}

export default currentUserMiddleware;