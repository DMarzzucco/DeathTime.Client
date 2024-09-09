import { ReactNode } from "react";
export interface DateProps {
    name: string;
    email: string,
    age: string
}
export interface User extends DateProps { id: number }

export interface parrafProps { children: ReactNode }
export interface contextProps {
    users: User[];
    confirm: boolean;
    fetchUser: () => void;
    fetchCreater: (data:any) => void
}