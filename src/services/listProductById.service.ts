import { ProductRepository } from "../repository/product.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";


interface IProps {
    productId: string,
}

export const listProductById = async ({productId}: IProps) => {
    const productRepository = getCustomRepository(ProductRepository);
    const product = await productRepository.findById(productId);

    if (!product) {
        throw new AppError("product not found", 404);
    }

    return product;
}