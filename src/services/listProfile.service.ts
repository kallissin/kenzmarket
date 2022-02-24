import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

interface IProps {
    id: string,
}

export const userProfile = async ({id}:IProps) => {

    const userRepository = getCustomRepository(UserRepository);
    
    const user = await userRepository.findById(id);
 
    if (!user) {
        throw new AppError("User not found", 400);
    }
 
    return user;

}