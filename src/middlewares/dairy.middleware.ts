import { Request, Response, NextFunction } from 'express';

export function validateDairy(req: Request, res: Response, next: NextFunction) : any {
    const { title, description } = req.body;
    if (title === '' || description === '') {
        return res.status(400).json({
            "message": "missing required field"
        });
    }
    next();
}