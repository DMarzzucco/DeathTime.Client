import { Request, Response } from "express";
import { BsDate } from "../db/db";

export const getRegister = async (_req: Request, res: Response) => {
    try {
        const date = await BsDate.query('SELECT * FROM users');
        if (!date) {
            return res.status(400).json({ message: "date not found" })
        }
        return res.status(200).json(date.rows)

    } catch (error) {
        console.log(`Error al obtener usuarios ${error}`)
        return res.status(500).json({ message: "server error" })
    }
}
export const postRegister = async (req: Request, res: Response) => {
    const { name, age, email } = req.body;
    try {
        const dateBas = await BsDate.query('INSERT INTO users (name,age,email) VALUES ($1, $2, $3)', [name, age, email])
        if (!dateBas) {
            return res.status(400).json({ message: "dates not found" })
        }
        // return dateBas
        return res.status(200).json({ message: `Usario creado` })
    } catch (error) {
        return res.status(500).json({ message: `${error}` })
    }
}