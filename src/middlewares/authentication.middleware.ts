import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    jwt.verify(token as string, process.env.SECRET as string, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({message: "Missing authorization headers"})
        }
        console.log(decoded)
        const { userId, isAdm, cartId } = decoded;
        req.user = { userId: userId, isAdm: isAdm, cartId: cartId};
        next()
    })
}

export default isAuthenticated;