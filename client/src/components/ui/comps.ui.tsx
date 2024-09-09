import React from "react";
import { parrafProps, User } from "../../interface";

export const NumberDate: React.FC<parrafProps> = ({ children }) => {
    return (
        <p className="font-bold mx-1 text-2xl">{children}</p>
    )
}
export const ListUsers: React.FC<{ users: User[] }> = ({ users }) => {

    return (users && users.length > 0 ? users.map(user => (
        <div key={user.id} className="flex flex-col w-full justify-start items-start p-1  border border-slate-400 ">
            <h2 className="font-bold text-xl">{user.name}</h2>
            <div className="flex flex-col justify-start items-start">
                <p>age: <span className="font-bold">{user.age}</span> </p>
                <p>email: <span className="font-bold">{user.email}</span></p>
            </div>
        </div>)) : <p className="font-bold text-xl">No data record</p>
    )
}