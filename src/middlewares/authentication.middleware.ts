import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    jwt.verify(token as string, process.env.SECRET as string, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({message: "Missing authorization headers"})
        }
        const { id, isAdm } = decoded;
        req.user = { id: id, isAdm: isAdm};
        next()
    })
}

export default isAuthenticated;