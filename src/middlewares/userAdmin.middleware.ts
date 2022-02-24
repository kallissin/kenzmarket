import {Request, Response, NextFunction} from 'express';


const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const isAdm = req.user?.isAdm;

    if (isAdm === false) {
        return res.status(401).json({message: "Unauthorized"})
    }
    next();
}

export default isAdmin;