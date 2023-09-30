import { useDispatch, useSelector } from "react-redux";
import { ShowUserInfoHandler } from "../../Redux/UserData";
import Avatar from "../../UI Components/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../UI Components/List";
import { HiMiniEllipsisVertical, HiMiniUserPlus, HiXMark } from "react-icons/hi2";
import { existGroups, getGroupId, getGroupUser } from "../../Redux/Groups";
import { modalHandler, getModalUsers } from "../../Redux/Modal";
import Button from "../../UI Components/Button";
import Span from "../../UI Components/Span";

function Profile() {
    const Dispatch = useDispatch()
    const Info = useSelector(state => state.UserData.Info)
    const Users = useSelector(state => state.UserData.users)
    const isUser = useSelector(state => state.UserData.ShowUsers)
    const { groupUsers } = useSelector(state => state.Group)


    const InviteUser = Users.filter(user => !groupUsers.some(groupuser => user.id === groupuser.id));

    const AddUsersToGroup = () => {
        Dispatch(modalHandler())
        Dispatch(getModalUsers([...InviteUser]))
        Dispatch(existGroups(true))
    }
    const closeUserInfo = () => {
        Dispatch(ShowUserInfoHandler())
    }

    const getGroupsMember = async () => {
        try {
            const Response = await axios.get(`http://localhost:4000/group/${Info.groupId}`)
            const groupUsers = Response.data.users
            Dispatch(getGroupUser({ User: [...groupUsers], AddingUser: false }))
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
                <Button
                    onClickFunc={() => closeUserInfo()}
                    icon={<HiXMark className="text-2xl" />}
                />
                <Span contain={"Contact Info"} size={"lg"} />
            </div>
            <div className="flex p-6 bg-gray-800 flex-col items-center">
                <Avatar height="11" width="11" />
                <Span contain={Info[0].Name} />
                <Span contain={Info[0].mobile} />
                <Span contain={Info[0].email} />
            </div>
            <div className="p-5 mt-4 flex flex-col bg-gray-800">
                <Span contain={"About"} />
                <Span contain={"We can't force people to choose us"} />
            </div>
            {!isUser && <div className="p-5 mt-4 bg-gray-800">
                <div className="flex items-center justify-between">
                    <Span contain={"Group Members"} />

                    <Button
                        onClickFunc={() => AddUsersToGroup()}
                        icon={<HiMiniUserPlus className="pr-1 text-2xl" />}
                        name={"Add Peoples"}
                    />
                </div>
                <List
                    users={groupUsers}
                    btn={true}
                    btnName={<HiMiniEllipsisVertical className="text-xl" />}
                    isAdmin={Info[0].isAdmin}
                />

            </div>}
            {!isUser && <div className="p-5 mt-4 bg-gray-800">
                <Span contain={"Invite Contact"} />
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