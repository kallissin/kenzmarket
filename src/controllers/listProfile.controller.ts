import {Request, Response} from 'express';
import { userProfile } from '../services/listProfile.service';

export const profile = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        
        const user = await userProfile({id});
        
        return res.status(200).json(user);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}