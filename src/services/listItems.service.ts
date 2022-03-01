import { getCustomRepository } from "typeorm";
import { ItemRepository } from "../repository/item.repository";

interface Cart {
    total: number
}

interface IProps {
    cart: Cart 
}

export const listItems = async ({cart}: IProps) => {
    const itemRepository = getCustomRepository(ItemRepository);
    const items = await itemRepository.find({
        where: {
            cart: cart
        },
        relations: ['product']
    });
    return items;
}