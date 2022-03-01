import { ItemRepository } from "../repository/item.repository";
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repository/product.repository";
import { CartRepository } from "../repository/cart.repository";

interface Product {
    productId: string,
    name: string,
    stock?: number,
    price: number
}

interface Cart {
    total: number,
    cartId: string
}

interface IProps {
    cart: Cart,
    product: Product,
    quantity: number
}

interface Item {
    itemId: string,
    quantity: number,
    product: Product
}

export const createItem = async ({cart, product, quantity}: IProps) => {
    const itemRepository = getCustomRepository(ItemRepository);
    const productRepository = getCustomRepository(ProductRepository);
    const cartRepository = getCustomRepository(CartRepository);

    if (product.stock != undefined) {
        product.stock = product.stock - quantity
        await productRepository.update({productId: product.productId}, {...product}) 
    }

    const item = await itemRepository.findOne({
        where: {
            product: product,
            cart: cart
        }
    })

    if (item) {
        item.quantity += quantity
        await itemRepository.update({itemId: item.itemId}, {...item})
    } else {
        await itemRepository.save({cart, product, quantity})
    }

    const items: Array<Item> = await itemRepository.find({
        where: {
            cart: cart
        },
        relations: ['product']
    })

    cart.total = 0;
    for (let i = 0; i < items.length; i++) {
        cart.total += (items[i].product.price * items[i].quantity)
    }
    cartRepository.update({cartId: cart.cartId}, {total:cart.total})

}