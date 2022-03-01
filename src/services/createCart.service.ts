import { CartRepository } from '../repository/cart.repository';
import { getCustomRepository } from 'typeorm';

interface User {
    name: string,
    email: string,
    password?: string,
    isAdm: boolean
}

interface IProps {
    user: User
}

export const createCart = async ({user}: IProps) => {
    let total: number = 0;
    const cartRepository = getCustomRepository(CartRepository);
    const cart = cartRepository.create({total, user});
    await cartRepository.save(cart);

    return cart;
   
}