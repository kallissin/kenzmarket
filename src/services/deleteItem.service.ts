import { getCustomRepository } from "typeorm"
import AppError from "../errors/AppError";
import { CartRepository } from "../repository/cart.repository";
import {ItemRepository} from "../repository/item.repository"
import { ProductRepository } from "../repository/product.repository";


interface IProps {
    itemId: string;
}

export const deleteItemToCart = async ({itemId}: IProps) => {
    const itemRepository =  getCustomRepository(ItemRepository);
    const cartRepository = getCustomRepository(CartRepository);
    const productRepository = getCustomRepository(ProductRepository);
    const item = await itemRepository.findOne({
        where: {
            itemId: itemId
        },
        relations: ['product']
    })

    if (item) {
        const stock = item.product.stock += item?.quantity
        const product = await productRepository.update({productId: item?.product.productId}, {stock: stock})
    } else {
        throw new AppError("Item not found!", 404)
    }
    const cart = await cartRepository.findOne({ relations:["items"] })

    const value = item?.product.price
    const quantity = item?.quantity

    if(value && quantity) {
        const amount = value * quantity
        if (cart) {
            cart.total = cart.total - amount
            await cartRepository.update({cartId:cart.cartId}, {total: cart.total})
        }
    }

   await itemRepository.delete(itemId)
}