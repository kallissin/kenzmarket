declare namespace Express {
    interface Request {
        user?: { 
            id: string,
            isAdm: boolean
        }
    }
}