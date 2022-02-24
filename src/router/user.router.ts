import { Router } from 'express';
import {create} from '../controllers/createUser.controller';
import { list } from '../controllers/listUsers.controller';
import { profile } from '../controllers/listProfile.controller';
import { validate } from '../middlewares/validate';
import { userSchema } from '../schemas/user.schema';
import isAdminOrProfile from '../middlewares/userAdminOrProfile.middleware';
import isAuthenticated from '../middlewares/authentication.middleware';
import isAdmin from '../middlewares/userAdmin.middleware';

const router = Router();


export const userRouter = () => {
    router.post('', validate(userSchema), create);
    router.get('',isAuthenticated, isAdmin, list);
    router.get('/:id', isAuthenticated, isAdminOrProfile, profile)
    return router;
}