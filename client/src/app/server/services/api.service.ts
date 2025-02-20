import { User } from "@/interfaces";
import { server } from "../server";


export async function CreateResponse(data: User) {
    try {
        const res = await fetch(`${server}/User`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            const errRes = await res.json()
            throw new Error(`${res.status} ${errRes.message || res.statusText}`)
        }
        return res.json()
    } catch (error) {
        console.log(error)
        throw new Error("Erro to response fetching")
    }
}
export async function GetAllResponse() {
    try {
        const res = await fetch(`${server}/User`, { cache: "no-store" })
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
        return res.json()
    } catch (error: any) {
        console.error("THE ERROR IS:", error)
        throw new Error(error.message)
    }
}
export async function DeleteResponse(id: number) {
    try {
        const res = await fetch(`${server}/User/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        if (!res.ok) {
            throw new Error(`${res.status}${res.statusText}`)
        }
        return res;
    } catch (error: any) {
        throw new Error(error.message)
    }

}