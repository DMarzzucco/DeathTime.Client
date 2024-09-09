const server = import.meta.env.SERVER_URL || "http://localhost:3000/api";

export const CreateResponse = async (data: any) => {
    try {
        const res = fetch(`${server}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        if (!(await res).ok) {
            throw new Error(`${(await res).status} ${(await res).statusText}`)
        }
        return (await res).json()
    } catch (error) {
        throw new Error("Erro to response fetching")
    }
}
export const GetAllResponse = async () => {
    try {
        const res = fetch(`${server}/users`, { cache: "no-store" })
        if (!(await res).ok) {
            throw new Error(`${(await res).status} ${(await res).statusText}`)
        }
        return (await res).json()
    } catch (error) {
        throw new Error("Error to response fetching")
    }
}