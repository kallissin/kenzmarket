import { UserRepository } from "../repository/user.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";

interface IProps {
    name: string,
    email: string,
    password: string,
    isAdm: boolean
}

export const createUser = async ({name, email, password, isAdm}: IProps) => {
    
    try {
        const userRepository = getCustomRepository(UserRepository);
        const user = userRepository.create({name, email, password, isAdm});
        await userRepository.save(user);
        return user;
    } catch(error) {
        throw new AppError("Email already exists", 409);
    }
}