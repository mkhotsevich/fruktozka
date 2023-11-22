import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.header("Authorization")

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(401).json(null);
    }

    const token = authorizationHeader.replace("Bearer ", "")

    if (!token) {
        return res.status(401).json({});
    }

    try {
        // @ts-ignore
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // @ts-ignore
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({});
    }
}