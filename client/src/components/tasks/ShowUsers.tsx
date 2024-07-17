import axios from "axios";
import React, { useEffect, useState } from "react";
export interface User {
    id: number;
    name: string;
    email: string;
    age: number
}
const ShowUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get<User[]>('http://localhost:3000/api/users')
            if (result.status === 403) {
                setError(true)
            }
            setUsers(result.data)
        }
        fetchUsers();
    }, [])
    return (
   <div className="bg-slate-400 pt-5 w-full px-2 my-1 rounded-lg">
         <div className="h-200 overflow-y-auto  my-2 border bg-slate-800 border-slate-400">
             {users.map(user => (
                 <div key={user.id} className="flex flex-col justify-start items-start p-1  border border-slate-400 ">
                     <h2 className="font-bold text-xl">{user.name}</h2>
                     <div className="flex flex-col justify-start items-start">
                         <p>age: <span className="font-bold">{user.age}</span> </p>
                         <p>email: <span className="font-bold">{user.email}</span></p>
                     </div>
                 </div>
             ))}
             {error && <p>tiempo expirado </p>}
         </div>
   </div>
    )
}
export default ShowUsers