import { EntityRepository, Repository} from "typeorm";
import { Product } from "../entities";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findById(productId: string) {
        return this.findOne({productId})
    }
    findByName(name: string) {
        return this.findOne({name})
    }
}