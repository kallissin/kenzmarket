import { ProductRepository } from "../repository/product.repository";
import { getCustomRepository } from "typeorm";

export const listProducts = async () => {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.find()

    return product;
}