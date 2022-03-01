import { CartRepository } from "../repository/cart.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";

interface IProps {
    cartId: string,
}

export const listCartById = async ({cartId}: IProps) => {
    const cartRepository = getCustomRepository(CartRepository);
    const cart = await cartRepository.findById(cartId);
    if (!cart) {
        throw new AppError("cart not found", 404);
    }

    return cart;
}
