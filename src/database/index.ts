import { createConnection } from "typeorm";

export const connectDatabase = () => {
    createConnection();
}