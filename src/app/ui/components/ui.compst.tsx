"use client"
import { User } from "@/interfaces";
import React from "react";

export const ErrorInput: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="p-1 bg-red-600 rounded-lg m-1 w-full flex justify-center items-center">
            <p className="font-semibold">{title} is required</p>
        </div>
    )
}
export const NoDataRecord: React.FC = () => {
    return (
        <div className="flex w-full justify-center items-center h-full">
            <h2 className="text-xl font-semibold">No data Record</h2>
        </div>
    )
}
export const ListUsers: React.FC<{ users: User[] }> = ({ users }) => {

    return (Array.isArray(users) && users.map((user) => (
        <div key={user.id} className="flex flex-col w-full justify-start items-start p-1  shadow-xl  ">
            <h2 className="font-bold text-xl text-red-500">{user.name}</h2>
            <div className="flex flex-col justify-start items-start">
                <p>age: <span className="font-bold">{user.age}</span> </p>
                <p>email: <span className="font-bold">{user.email}</span></p>
            </div>
        </div>))
    )
}