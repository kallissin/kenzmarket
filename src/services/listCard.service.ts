import { CartRepository } from "../repository/cart.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";

interface IProps {
    cartId: string,
}

export const listCart = async () => {
    const cartRepository = getCustomRepository(CartRepository);
    const carts = await cartRepository.find();
    if (!carts) {
        throw new AppError("cart not found", 400);
    }

    return carts;
}
