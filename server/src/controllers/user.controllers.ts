import { Request, Response } from "express";
import { BsDate } from "../db/db";

export const getRegister = async (_req: Request, res: Response) => {
    try {
        const date = await BsDate.query('SELECT * FROM users');
        if (date.rows.length === 0) {
            return res.status(400).json({ message: "date not exist" })
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
        return res.status(200).json({ message: `Usario creado` })
    } catch (error) {
        return res.status(500).json({ message: `${error}` })
    }
}
export const deleteAllRegister = async (_req: Request, res: Response) => {
    try {
        const result = await BsDate.query('DELETE FROM users ');
        if (!result) {
            return res.status(400).json({ message: "no hay datos" })
        }
        return res.status(200).json({ message: "Todos los datos fueron eliminados" })
    } catch (error) {
        return res.status(500).json({ message: `${error}` })
    }
}
export const updateRegister = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email, age } = req.body
    try {
        const result = await BsDate.query('UPDATE users SET name = $1, email = $2, age= $3 WHERE id = $4', [name, email, age, userId]);
        if (!result) {
            return res.status(400).json({ message: "user not found" })
        }
        return res.status(200).json({ message: "user was update" })
    } catch (error) {
        return res.status(500).json({ message: `${error}` })
    }
}
