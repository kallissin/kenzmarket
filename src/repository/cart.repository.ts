import { EntityRepository, Repository } from 'typeorm';
import { Cart } from '../entities';


@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
    findById(cartId: string) {
        return this.findOne({cartId})
    }
}