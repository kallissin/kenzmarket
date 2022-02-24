import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/user.repository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import AppError from "../errors/AppError";

export const authenticateUser = async (email: string, password: string) => {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByEmail(email);

    if (user === undefined || !bcrypt.compareSync(password, user.password)) {
        throw new AppError("Wrong email/password", 401);
    }

    const token = jwt.sign({id: user.id, isAdm: user.isAdm}, process.env.SECRET as string, {expiresIn: '1d'});

    return token;
}