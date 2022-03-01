import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

interface IProps {
    userId: string,
}

interface User {
    userId: string,
    name: string,
    email: string,
    password?: string,
    isAdmm: boolean,
    createdOn: Date,
    updatedOn: Date
}

export const userProfile = async ({userId}:IProps) => {

    const userRepository = getCustomRepository(UserRepository);
    
    const user: User | any = await userRepository.findById(userId);
 
    if (!user) {
        throw new AppError("User not found", 404);
    }
    delete user.password
    return user;

}