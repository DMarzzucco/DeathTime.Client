import React from "react";
import { useAuth } from "../../context/Auth.context";
import { ListUsers, NoDataRecord } from "../ui/comps.ui";

const ShowUsers: React.FC = () => {
    const { ...pre } = useAuth()
    React.useEffect(() => {
        pre.fetchUser();
        const interval = setInterval(pre.fetchUser, 1000);
        return () => clearInterval(interval)
    }, [pre.fetchUser])
    return (
        <div className=" flex justify-center items-center pt-5 w-full px-2 my-1 rounded-lg">
            <div className=" flex flex-col  h-200 overflow-y-auto my-2 shadow-2xl rounded-lg w-1/2">
                {pre.users && pre.users.length > 0 ?
                    <ListUsers users={pre.users} /> : <NoDataRecord />
                }
            </div>
        </div>
    )
}
export default ShowUsers