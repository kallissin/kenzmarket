import { Request, Response } from 'express';
import { listCartById } from '../services/listCartById.service';
import { listItems } from '../services/listItems.service';

export const cardById = async (req: Request, res: Response) => {
    try {
        const cartId = req.params.id;

        const cart = await listCartById({cartId});

        const items = await listItems({cart})
        
        cart['items'] = items

        return res.status(200).json(cart);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}