import { EntityRepository, Repository } from 'typeorm';
import { Item } from '../entities';


@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
    findById(itemId: string) {
        return this.findOne({itemId})
    }
}