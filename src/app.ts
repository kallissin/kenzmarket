import express from 'express';
import { InitializerRouter } from './router';
import { connectDatabase } from './database';

import "reflect-metadata";

connectDatabase();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "Hello world!"});
})

InitializerRouter(app);

export default app;