import {Request, Response} from 'express';
import { listCartById } from '../services/listCartById.service';
import { userProfile } from '../services/listProfile.service';

export const profile = async (req: Request, res: Response) => {
    try {
        const cartId = req.user?.cartId

        const userId = req.params.id;
        
        const user = await userProfile({userId});

        if (cartId) {
            const cart = await listCartById({cartId})
            user['cart'] = cart;
        }
        
        return res.status(200).json(user);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}