import { Request, Response } from "express";
import { prisma } from "../prisma/prisma.service";
import { dateCreate } from "../interface/global.interface";


export default class UserControllers {

    timerRegister(_req: Request, res: Response) {
        return res.status(200).json({ message: "fecha limite aun no alcanzada" })
    }

    async getRegister(_req: Request, res: Response) {
        try {
            const date = await prisma.users.findMany();
            if (date.length === 0) {
                return res.status(400).json({ message: "date not exist" })
            }
            return res.status(200).json(date)

        } catch (error) {
            console.log(`Error al obtener usuarios ${error}`)
            return res.status(500).json({ message: "server error" })
        }
    }

    async postRegister(req: Request, res: Response) {
        const object: dateCreate = req.body;
        if (!object) {
            return res.status(400).json({ mesage: "date worns" })
        }
        try {
            const user = await prisma.users.create({ data: object })
            console.log('usuario creado')
            return res.status(200).json({ message: `Usario creado`, user: user })
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
    async deleteRegister(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        try {
            const result = await prisma.users.delete({ where: { id: userId } })
            if (!result) {
                return res.status(400).json({ message: `usario ${userId} no fue encontrado` })
            }
            return res.status(200).json({ message: `El usuario ${userId} fue eliminado` })
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
    async updateRegister(req: Request, res: Response) {
        const userId = parseInt(req.body.id)
        const object: dateCreate = req.body
        try {
            const result = await prisma.users.update({ where: { id: userId }, data: object });
            if (!result) {
                return res.status(400).json({ message: "user not found" })
            }
            return res.status(200).json({ message: "user was update" })
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }

}
