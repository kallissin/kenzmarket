import { Request, Response } from 'express';
import { listProducts } from '../services/listProducts.service';

export const list = async(req: Request, res: Response) => {
    const users = await listProducts();

    return res.status(200).json(users);
}