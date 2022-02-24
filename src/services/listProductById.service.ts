import { ProductRepository } from "../repository/product.repository";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";


interface IProps {
    id: string,
}

export const listProductById = async ({id}: IProps) => {
    const productRepository = getCustomRepository(ProductRepository);
    const product = await productRepository.findById(id);

    if (!product) {
        throw new AppError("product not found", 400);
    }

    return product;
}