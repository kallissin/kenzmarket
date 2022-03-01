import { Router } from "express"
import { add } from "../controllers/addCart.controller";
import { deleteItem } from "../controllers/deleteItem.controller";
import { list } from "../controllers/listCart.contoller";
import { cardById } from "../controllers/listCartById.controller";
import isAuthenticated from "../middlewares/authentication.middleware";
import isAdmin from "../middlewares/userAdmin.middleware";
import isAdminOrProfile from "../middlewares/userAdminOrProfile.middleware";
import { validate } from "../middlewares/validate";
import { cartSchema } from "../schemas/cart.schema";


const router = Router()

export const cartRouter = () => {
    router.post('', isAuthenticated, validate(cartSchema), add);
    router.get('', isAuthenticated, isAdmin, list)
    router.get('/:id', isAuthenticated, isAdminOrProfile, cardById)
    router.delete('/:item_id', isAuthenticated, isAdminOrProfile, deleteItem)

    return router;
}