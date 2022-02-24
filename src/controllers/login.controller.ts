import { Request, Response } from 'express';
import { authenticateUser } from '../services/login.service';


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await authenticateUser(email, password);
        return res.json({ token });
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message});
    }

}