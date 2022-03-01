import {Express} from 'express'
import { userRouter } from './user.router'
import { loginRouter } from './login.router'
import { productRouter } from './product.router'
import { cartRouter } from './cart'


export const InitializerRouter = (app: Express) => {
    app.use('/api/users', userRouter())
    app.use('/api/login', loginRouter())
    app.use('/api/product', productRouter())
    app.use('/api/cart', cartRouter())
}