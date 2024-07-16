import React, { createContext, useContext } from "react";
import { contextProps, ProviderInt } from "../interface/interfaces";

export const AuthContext = createContext<contextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error(`${Error}`) }
    return context;
}
const AuthProvider: React.FC<ProviderInt> = ({ children }) => {
    return (
        <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;