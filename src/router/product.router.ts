import { Router } from "express"
import { create } from '../controllers/createProduct.controller'
import { productById } from "../controllers/listProductById.controller";
import { list } from "../controllers/listProducts.controller";
import isAuthenticated from "../middlewares/authentication.middleware";
import isAdmin from "../middlewares/userAdmin.middleware";
import { validate } from "../middlewares/validate";
import { productSchema } from "../schemas/product.schema";

const router = Router();

export const productRouter = () => {
    router.post('',isAuthenticated, isAdmin, validate(productSchema), create);
    router.get('', isAuthenticated, list)
    router.get('/:id', isAuthenticated, productById)
    return router;
}