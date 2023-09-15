import Card from "../../UI Components/Card";
import { HiMiniUserPlus } from "react-icons/hi2"
import Avatar from "../../UI Components/Avatar";
import { useSelector } from "react-redux/es/hooks/useSelector";

function AddGroupUser() {
    const Users = useSelector(state => state.UserData.users)

    return (
        <Card>
            <div className="w-96 flex items-center border-b-2 p-2 border-b-gray-600 rounded-md">
                <span className="bg-slate-300 rounded-full p-3">
                    <HiMiniUserPlus className="text-2xl" />
                </span>
                <span className="ml-2 text-xl font-semibold">Add Users</span>
            </div>
            <ul className="overflow-x-auto h-[32rem]" >
                {Users.map((user) => 
                    <li key={user.id} className="p-2  flex items-center">
                        <Avatar height="3" width="3" />
                        <span className="ml-2 text-xl font-semibold">{user.Name}</span>
                    </li>
                )}
            </ul>
        </Card>
    )
}
export default AddGroupUser;