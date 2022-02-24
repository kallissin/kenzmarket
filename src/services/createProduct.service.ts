import { ProductRepository } from "../repository/product.repository"; 
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";

interface IProps {
    name: string,
    quantity: number,
    price: number
}

export const createProduct = async ({ name, quantity, price }: IProps) => {
    try {

        const productRepository = getCustomRepository(ProductRepository);
        const product = productRepository.create({ name, quantity, price });
        await productRepository.save(product);
        return product
    } catch(error) {
        throw new AppError("Product already exists", 409);
    }

}