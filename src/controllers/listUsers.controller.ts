import {Request, Response} from 'express';
import { listUsers } from "../services/listUsers.service"

export const list = async(req: Request, res: Response) => {
    const users = await listUsers();
    
    return res.status(200).json(users);
}