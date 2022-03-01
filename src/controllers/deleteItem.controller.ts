import {Request, Response} from 'express';
import { deleteItemToCart } from '../services/deleteItem.service';

export const deleteItem = async (req: Request, res: Response) => {
    try {

        const itemId = req.params.item_id
        
        await deleteItemToCart({itemId})
        
        return res.status(204).json({})
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}