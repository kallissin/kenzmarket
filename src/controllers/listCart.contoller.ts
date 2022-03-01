import { Request, Response } from 'express';
import { listCart } from '../services/listCard.service';
import { listItems } from '../services/listItems.service';

export const list = async (req: Request, res: Response) => {
    try {
        const carts = await listCart();

        for(let i = 0; i < carts.length; i++) {
            let cart = carts[i]
            const items = await listItems({cart})
            carts[i].items = items
        }
    
        return res.status(200).json(carts);

    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}