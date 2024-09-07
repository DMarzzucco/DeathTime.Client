import { Request, Response } from "express";
import { dateCreate } from "../interface/global.interface";
import UserService from "../service/users.service";

export default class UserControllers {
    private service: UserService;

    constructor() { this.service = new UserService() }

    public async getRegister(_req: Request, res: Response) {
        const result = await this.service.getAll()
        return res.status(result.statusCode).json(result.body)
    }
    public async getByid(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.service.getByid(Number(id))
        return res.status(result.statusCode).json(result.body)
    }
    public async postRegister(req: Request, res: Response) {
        const object: dateCreate = req.body;
        const result = await this.service.create(object)
        return res.status(result.statusCode).json(result.body)
    }
    public async updateRegister(req: Request, res: Response) {
        const userId = parseInt(req.body.id)
        const object: dateCreate = req.body
        const result = await this.service.update(userId, object)
        return res.status(result.statusCode).json(result.body)
    }
    public async deleteRegister(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const result = await this.service.deleteUser(userId)
        return res.status(result.statusCode).json(result.body)
    }
}
