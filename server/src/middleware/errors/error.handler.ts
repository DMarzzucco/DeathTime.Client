import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (err instanceof Prisma.PrismaClientKnownRequestError){
        if (err.code === "P2002"){
            return res.status(409).json({message:"this name already exists"})
        }
        if (err.code === "P2025"){
            return res.status(404).json({message:"user not found"})
        }
    }
    console.error(err.stack)

    const statusCode = err.statusCode || 500;
    const message = err.message || `Error internal Server: ${err.message}`;

    return res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    })
}