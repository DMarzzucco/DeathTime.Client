import { dateCreate, promsCreate, updateCreate } from "../interface/global.interface";
import { prisma } from "../prisma/prisma.service";
import { users } from "@prisma/client"
import { ResponseStatudsHTTPS } from "../utils/custom/https.custom";

export default class UserService {

    async getAll(): Promise<users[]> {
        try {
            return await prisma.users.findMany();
        } catch (error: any) {
            throw ResponseStatudsHTTPS.erorServer("Error server:", error.message)
        }
    }
    async getByid(id: number): Promise<users> {
        try {
            const result = await prisma.users.findUnique({ where: { id: id } })
            if (!result) {
                throw ResponseStatudsHTTPS.notFound()
            }
            throw ResponseStatudsHTTPS.succes
        } catch (error: any) {
            throw ResponseStatudsHTTPS.erorServer(error.message)
        }
    }
    async create(data: dateCreate): Promise<promsCreate> {
        if (!data) {
            throw ResponseStatudsHTTPS.conflict()
        }
        try {
            const result = await prisma.users.create({ data: data })
            throw ResponseStatudsHTTPS.cretae(result)
        } catch (error: any) {
            throw ResponseStatudsHTTPS.erorServer(error.message)
        }
    }
    async update(id: number, data: updateCreate): Promise<updateCreate> {
        try {
            if (!id) {
                throw ResponseStatudsHTTPS.notFound()
            }
            return await prisma.users.update({ where: { id: id }, data: data })
        } catch (error: any) {
            throw ResponseStatudsHTTPS.erorServer(error.message)
        }
    }
    async deleteUser(id: number): Promise<users> {
        if (!id) {
            throw ResponseStatudsHTTPS.notFound(`User with id: ${id} not found`)
        }
        try {
            return await prisma.users.delete({ where: { id: id } })
        } catch (error: any) {
            throw ResponseStatudsHTTPS.erorServer(error.message)
        }
    }
}