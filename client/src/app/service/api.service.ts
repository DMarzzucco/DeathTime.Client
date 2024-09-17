import { User } from "@/interfaces";

const server = process.env.NEXT_PUBLIC_SERVICE_URL || "http://localhost:3001/api";

export async function CreateResponse(data: User) {
    try {
        const res = await fetch(`${server}/users`, {
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
        const res = await fetch(`${server}/users`, { cache: "no-store" })
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
        return res.json()
    } catch (error) {
        throw new Error(`${error}`)
    }
}