import { Router } from 'express';
import { login } from '../controllers/login.controller';
import { validate } from '../middlewares/validate';
import { loginSchema } from '../schemas/login.schema';

const router = Router();


export const loginRouter = () => {
    router.post('', validate(loginSchema), login);

    return router;
}