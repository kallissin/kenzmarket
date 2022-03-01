import express from 'express';
import { InitializerRouter } from './router';
import { connectDatabase } from './database';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';
import "reflect-metadata";
import cors from 'cors';

connectDatabase();

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    app.use(cors());
    next();
})
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

InitializerRouter(app);

export default app;