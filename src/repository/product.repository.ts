import { EntityRepository, Repository} from "typeorm";
import { Product } from "../entities";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findById(id: string) {
        return this.findOne({id})
    }
}