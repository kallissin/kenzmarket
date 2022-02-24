import {Express} from 'express'
import { userRouter } from './user.router'
import { loginRouter } from './login.router'
import { productRouter } from './product.router'

export const InitializerRouter = (app: Express) => {
    app.use('/api/users', userRouter())
    app.use('/api/login', loginRouter())
    app.use('/api/product', productRouter())
}