import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';

export const listUsers = async () => {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find()

    return users;
}