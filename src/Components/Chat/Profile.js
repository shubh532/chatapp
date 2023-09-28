import { useDispatch, useSelector } from "react-redux";
import { HiXMark } from "react-icons/hi2";
import { ShowUserInfoHandler } from "../../Redux/UserData";
import Avatar from "../../UI Components/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../UI Components/List";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { getGroupId } from "../../Redux/Groups";

function Profile() {
    const [groupUsers, setGroupUsers] = useState([])
    const Dispatch = useDispatch()
    const Info = useSelector(state => state.UserData.Info)
    const Users = useSelector(state => state.UserData.users)
    const isUser = useSelector(state => state.UserData.ShowUsers)

    const InviteUser = Users.filter(user => !groupUsers.some(groupuser => user.id === groupuser.id));


    const closeUserInfo = () => {
        Dispatch(ShowUserInfoHandler())
    }

    const UpdateGroupUser = (users) => {
        setGroupUsers([...users])
    }
    const getGroupsMember = async () => {
        try {
            const Response = await axios.get(`http://localhost:4000/group/${Info.groupId}`)
            const groupUsers = Response.data.users
            setGroupUsers([...groupUsers])
        } catch (err) {
            console.log(err, "err from Profile")
        }
    }

    useEffect(() => {
        getGroupsMember()
        Dispatch(getGroupId(Info.groupId))
    }, [Info])

    return (
        <div className="text-white relative w-full h-full ">
            <div className="h-[10%] sticky z-[2] top-0 flex items-center p-3 bg-gray-700">
                <button onClick={() => closeUserInfo()}>
                    <HiXMark className="text-2xl" />
                </button>
                <span className="ml-4 text-lg">Contact Info</span>
            </div>
            <div className="flex p-6 bg-gray-800 flex-col items-center">
                <Avatar height="11" width="11" />
                <span className="text-lg">{Info[0].Name}</span>
                <span className="text-gray-500">{Info[0].mobile}</span>
                <span className="text-gray-500">{Info[0].email}</span>
            </div>
            <div className="p-5 mt-4 bg-gray-800">
                <h3 className="text-lg text-gray-500">About</h3>
                <span>We can't force people to choose us.</span>
            </div>
            {!isUser && <div className="p-5 mt-4 bg-gray-800">
                <span className="text-lg text-gray-500">
                    Group Members
                </span>
                <List
                    users={groupUsers}
                    btn={true}
                    btnName={<HiMiniEllipsisVertical className="text-xl" />}
                    UpdateGroupUser={(user)=>UpdateGroupUser(user)}
                    isAdmin={Info[0].isAdmin}
                />

            </div>}
            {!isUser && <div className="p-5 mt-4 bg-gray-800">
                <span className="text-lg text-gray-500">
                    Invite Contact
                </span>
                <List
                    users={InviteUser}
                    btn={true}
                    btnName={"Invite"}
                    BtnFuncs={(id) => console.log(id)}
                />
            </div>}
        </div>
    )
}

export default Profile;