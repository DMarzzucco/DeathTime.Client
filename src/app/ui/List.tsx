import { ListUsers, NoDataRecord } from "./components/ui.compst";
import { GetAllResponse } from "../server/services/api.service";

export async function ShowUsers() {
    // ASP.NET
    // const users = await GetAllResponse()    
    const response = await GetAllResponse()
    // Express Response
    const users = response.data 
    // console.log(users)
    return (
        <div className=" flex justify-center items-center pt-5 w-full px-2 my-1 rounded-lg">
            <div className=" flex flex-col  h-200 overflow-y-auto my-2 shadow-2xl rounded-lg w-1/2">
                {users && users.length > 0 ?
                    <ListUsers users={users} /> : <NoDataRecord />
                }
            </div>
        </div>
    )
}
