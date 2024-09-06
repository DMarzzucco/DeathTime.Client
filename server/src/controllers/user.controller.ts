import { Request, Response } from "express";
import { dateCreate } from "../interface/global.interface";
import UserService from "../service/users.service";


export default class UserControllers {

    constructor(private readonly service: UserService) { }

    public async getRegister(_req: Request, _res: Response) {
        return await this.service.getAll()
    }

    public async postRegister(req: Request, res: Response) {
        const object: dateCreate = req.body;
        try {
            const user = await this.service.create(object)
            console.log('usuario creado')
            return res.status (200).json({ message: `Usario creado`, user: user })
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
    public async updateRegister(req: Request, res: Response) {
        const userId = parseInt(req.body.id)
        const object: dateCreate = req.body
        try {
            return await this.service.update(userId, object)
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
    public async deleteRegister(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        try {
            return await this.service.deleteUser(userId)
        } catch (error) {
            return res.status(500).json({ message: `${error}` })
        }
    }
}
