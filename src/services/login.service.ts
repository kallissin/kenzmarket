import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/user.repository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import AppError from "../errors/AppError";
import { CartRepository } from "../repository/cart.repository";

export const authenticateUser = async (email: string, password: string) => {
    const userRepository = getCustomRepository(UserRepository);
    const cartRepository = getCustomRepository(CartRepository);

    const user = await userRepository.findByEmail(email);
    const cart = await cartRepository.findOne({user: user})

    if (user === undefined || !bcrypt.compareSync(password, user.password)) {
        throw new AppError("Wrong email/password", 401);
    }
    const token = jwt.sign({userId: user.userId, isAdm: user.isAdm, cartId: cart?.cartId}, process.env.SECRET as string, {expiresIn: '1d'});

    return token;
}