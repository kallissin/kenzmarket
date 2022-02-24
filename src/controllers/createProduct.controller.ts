import { Request, Response } from 'express';
import { createProduct } from '../services/createProduct.service';


export const create = async (req: Request, res: Response) => {
    try {
        const {name, quantity, price} = req.body;
        const product = await createProduct({name, quantity, price});
        res.status(201).json(product);
    } catch(error) {
        return res.status((error as any).statusCode).json({message: (error as any).message});
    }

}