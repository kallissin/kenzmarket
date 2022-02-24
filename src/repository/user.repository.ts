import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findById(id: string) {
        return this.findOne({id})
    }
    findByEmail(email: string) {
        return this.findOne({email})
    }
}
