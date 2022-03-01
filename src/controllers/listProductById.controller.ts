import { Request, Response } from 'express';
import { listProductById } from '../services/listProductById.service';

export const productById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        const product = await listProductById({productId});

        return res.status(200).json(product);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}