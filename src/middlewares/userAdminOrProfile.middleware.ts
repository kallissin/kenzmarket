import { Request, Response, NextFunction } from 'express';

interface User {
    isAdm: boolean | undefined,
    id: string | undefined,
}

const isAdminOrProfile = (req: Request, res: Response, next: NextFunction) => {
    const userLogged: User = {
        isAdm: req.user?.isAdm,
        id: req.user?.id,
    };

    const {id} = req.params;

    if (userLogged.isAdm === true || userLogged?.id === id) {
        next();
    } else {
        return res.status(401).json({message: "Unauthorized"});
    }
}

export default isAdminOrProfile;