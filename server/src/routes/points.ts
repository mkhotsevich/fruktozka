import { Router } from "express";
import { authMiddleware } from "../middlewares";

export const pointsRouter = Router()

pointsRouter.get('/', authMiddleware, (req, res) => {
    return res.json()
})