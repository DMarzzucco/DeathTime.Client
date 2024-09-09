import React from "react";
import { useAuth } from "../../context/Auth.context";
import { ListUsers } from "../ui/comps.ui";

const ShowUsers: React.FC = () => {
    const { ...pre } = useAuth()
    React.useEffect(() => {
        pre.fetchUser();
        const interval = setInterval(pre.fetchUser, 1000);
        return () => clearInterval(interval)
    }, [pre.fetchUser])
    return (
        <div className="bg-slate-400 pt-5 w-full px-2 my-1 rounded-lg">
            <div className=" flex flex-col w-full justify-center items-center h-200 overflow-y-auto my-2 border bg-slate-800 border-slate-400">
                <ListUsers users={pre.users} />
            </div>
        </div>
    )
}
export default ShowUsers