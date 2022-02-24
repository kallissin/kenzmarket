import { Request, Response, NextFunction } from 'express';

export const validate = (schema: any) => async(req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;
    try {
        await schema.validate(resource);
        next();
    } catch (e) {
        res.status(400).json({error: (e as any).errors.join(', ')});
    }

}