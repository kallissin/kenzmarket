import { Request, Response } from 'express';
import { createUser } from '../services/createUser.service';

export const create = async (req: Request, res: Response) => {
    try {
        const {name, email, password, isAdm} = req.body; 
        const user = await createUser({name, email, password, isAdm});    
        res.status(201).json(user);
    } catch (error) {
        return res.status((error as any).statusCode).json({message: (error as any).message});

    }
}