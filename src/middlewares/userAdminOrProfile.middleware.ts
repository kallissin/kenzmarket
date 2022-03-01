import { Request, Response, NextFunction } from 'express';

interface User {
    isAdm: boolean | undefined,
    userId: string | undefined,
}

const isAdminOrProfile = (req: Request, res: Response, next: NextFunction) => {
    const userLogged: User = {
        isAdm: req.user?.isAdm,
        userId: req.user?.userId,
    };

    const userId = req.params.id;

    if (userLogged.isAdm === true || userLogged?.userId === userId) {
        next();
    } else {
        return res.status(401).json({message: "Unauthorized"});
    }
}

export default isAdminOrProfile;