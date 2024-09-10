import { dateCreate, updateCreate, ServiceResponse } from "../interface/global.interface";
import { prisma } from "../prisma/prisma.service";
import { Prisma, users } from "@prisma/client"
import { ResponseStatudsHTTPS } from "../utils/custom/https.custom";

export default class UserService {

    async getAll(): Promise<ServiceResponse<users[]>> {
        const users = await prisma.users.findMany();
        return ResponseStatudsHTTPS.succes(users);
    }
    async getByid(id: number): Promise<ServiceResponse<users>> {
        const user = await prisma.users.findUnique({ where: { id: id } })
        if (!user) return ResponseStatudsHTTPS.notFound()
        return ResponseStatudsHTTPS.succes(user)
    }
    async create(data: dateCreate): Promise<ServiceResponse<dateCreate>> {
        try {
            const result = await prisma.users.create({ data: data })
            return ResponseStatudsHTTPS.cretae(result)
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                return ResponseStatudsHTTPS.conflict(`This name already exists`)
            }
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
    }
    async update(id: number, data: updateCreate): Promise<ServiceResponse<updateCreate>> {
        const user = await prisma.users.update({ where: { id: id }, data: data })
        if (!user) return ResponseStatudsHTTPS.notFound()
        return ResponseStatudsHTTPS.succes(user)
    }
    async deleteUser(id: number): Promise<ServiceResponse<users>> {
        const user = await prisma.users.delete({ where: { id: id } })
        if (!user) return ResponseStatudsHTTPS.notFound(`User with id: ${id} not found`)
        return ResponseStatudsHTTPS.succes(user)
    }
}