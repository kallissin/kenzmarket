import { ProductRepository } from "../repository/product.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";


interface IProps {
    name: string,
}

export const listProductByName = async ({name}: IProps) => {
    const productRepository = getCustomRepository(ProductRepository);
    const product = await productRepository.findByName(name);

    if (!product) {
        throw new AppError("product not found", 404);
    }

    return product;
}