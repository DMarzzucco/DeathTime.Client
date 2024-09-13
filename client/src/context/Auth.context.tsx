import React, { createContext, useContext } from "react";
import { contextProps, User } from "../interface";
import { CreateResponse, GetAllResponse } from "../api/Api";

export const AuthContext = createContext<contextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const [data, setData] = React.useState<DateProps>()
    const [users, setUsers] = React.useState<User[]>([]);
    const [confirm, setConfirm] = React.useState<boolean>(false);

    const fetchUser = async () => {
        const result = await GetAllResponse()
        setUsers(result.data)
    }
    const fetchCreater = async (data: any) => {
        await CreateResponse(data)
        setConfirm(true)
        const timer = setTimeout(() => {
            setConfirm(false), window.location.reload()
        }, 500);
        return () => clearTimeout(timer);
    }
    const Values = React.useMemo(() => ({
        users,
        // data,
        confirm,
        fetchUser,
        fetchCreater
    }), [users, confirm, fetchCreater, fetchUser])
    return (
        <AuthContext.Provider value={Values}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error(`${Error}`) }
    return context;
}