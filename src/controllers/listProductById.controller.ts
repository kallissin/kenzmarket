import { Request, Response } from 'express';
import { listProductById } from '../services/listProductById.service';

export const productById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await listProductById({id});

        return res.status(200).json(product);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message})
    }
}