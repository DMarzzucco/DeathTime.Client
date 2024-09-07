import { dateCreate, updateCreate, ServiceResponse } from "../interface/global.interface";
import { prisma } from "../prisma/prisma.service";
import { Prisma, users } from "@prisma/client"
import { ResponseStatudsHTTPS } from "../utils/custom/https.custom";

export default class UserService {

    async getAll(): Promise<ServiceResponse<users[]>> {
        try {
            const users = await prisma.users.findMany();
            return ResponseStatudsHTTPS.succes(users);
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer("Error server:", error.message);
        }
    }
    async getByid(id: number): Promise<ServiceResponse<users>> {
        try {
            const user = await prisma.users.findUnique({ where: { id: id } })
            if (!user) {
                return ResponseStatudsHTTPS.notFound()
            }
            return ResponseStatudsHTTPS.succes(user)
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
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
        try {
            const user = await prisma.users.update({ where: { id: id }, data: data })
            if (!user) {
                return ResponseStatudsHTTPS.notFound()
            }
            return ResponseStatudsHTTPS.succes(user)
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
    }
    async deleteUser(id: number): Promise<ServiceResponse<users>> {
        try {
            const user = await prisma.users.delete({ where: { id: id } })
            if (!user) {
                return ResponseStatudsHTTPS.notFound(`User with id: ${id} not found`)
            }
            return ResponseStatudsHTTPS.succes(user)
        } catch (error: any) {
            return ResponseStatudsHTTPS.errorServer(error.message)
        }
    }
}