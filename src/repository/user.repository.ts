import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findById(userId: string) {
        return this.findOne({userId})
    }
    findByEmail(email: string) {
        return this.findOne({email})
    }
}
