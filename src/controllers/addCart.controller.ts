import { Request, Response } from 'express';
import { createItem } from '../services/createItem.service';
import { listCartById } from '../services/listCartById.service';
import { listItems } from '../services/listItems.service';
import { listProductByName } from "../services/listProductByName.service";


interface Product {
    productId: string,
    name: string,
    stock: number,
    price: number
}

export const add = async (req: Request, res: Response) => {
    const {name, quantity} =  req.body;
    try {
        const product: Product = await listProductByName({name})

        if (product.stock != undefined && product.stock >= quantity) {
            const cartId = req.user?.cartId;
            console.log(cartId)
            if (cartId) {
                const cart = await listCartById({cartId})

                await createItem({cart, product, quantity})

                if(cart){
                    const items = await listItems({cart})
                    cart['items'] = items
                    return res.status(201).json(cart)
                }
            }
        }else {
            return res.status(409).json({message: "There is no required amount of this product"})
        }
    } catch (error) {
        return res.status((error as any).statusCode).json({message: (error as any).message});
    }
}