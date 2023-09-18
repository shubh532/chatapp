import { useState } from "react";
import Card from "../../UI Components/Card";
import { HiMiniUserPlus, HiMiniCheck } from "react-icons/hi2"
import { LiaGrinAlt, } from "react-icons/lia";
import Avatar from "../../UI Components/Avatar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Picker from '@emoji-mart/react'


function AddGroupUser() {
    const Users = useSelector(state => state.UserData.users)
    const [message, typeMessage] = useState("")
    const [showEmojiChart, unShowEmojiChart] = useState(false)
    const [select_Users, setSelect_User] = useState([...Users])
    const [selectedUsers, setSelectedUser] = useState([])


    const onClickEmojiHandler = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        typeMessage(message + emoji);
    }

    const EmojiHandler = (e) => {
        e.preventDefault()
        unShowEmojiChart(!showEmojiChart)
    }

    const getGroupNameHandler = (e) => {
        e.preventDefault()
        typeMessage(e.target.value)
    }

    const SelectGroupUsersHandler = (id, name) => {
        const grpUser = {
            userId: id,
            Name: name
        }
        setSelectedUser([...selectedUsers, grpUser])
        const removeUser = select_Users.filter(user => user.id !== id)
        setSelect_User([...removeUser])
    }

    const RemoveSelectedUser = (id, Name) => {
        const removeUser = selectedUsers.filter(user => user.userId !== id)
        setSelect_User([...select_Users, { id, Name }])
        setSelectedUser([...removeUser])

    }

    const createGroupHandler = () => {

    }

    return (
        <Card>
            <div className="shadow-xl p-2 ">
                <form className="flex items-center justify-between" >
                    <div className="flex items-center">
                        <input className="w-72 border-none focus:ring-0" maxLength={30} placeholder="Group Name" type="text" required value={message} onChange={getGroupNameHandler} ></input>
                        <button onClick={EmojiHandler}>
                            <LiaGrinAlt className="text-2xl" />
                        </button>
                    </div>
                    <button className="bg-slate-300 p-2 rounded-full mr-2">
                        <HiMiniCheck className="text-2xl" />
                    </button>
                </form>
            </div>
            {showEmojiChart && <div className="absolute top-14 right-0">
                <Picker skin={5} onEmojiSelect={onClickEmojiHandler} previewPosition={"none"} />
            </div>}
            <div>
                <ul className="overflow-y-auto max-h-52">
                    {selectedUsers.map((user) =>
                        <li key={user.userId} onClick={() => RemoveSelectedUser(user.userId, user.Name)} className="p-2 cursor-pointer hover:bg-slate-400 flex items-center">
                            <Avatar height="3" width="3" />
                            <span className="ml-2 text-xl font-semibold">{user.Name}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="w-96 flex items-center p-1 mt-1 rounded-md">
                <span className="bg-slate-300 rounded-full p-1">
                    <HiMiniUserPlus />
                </span>
                <span className="ml-2 font-semibold">Add Users</span>
            </div>
            <ul className="overflow-y-auto max-h-full" >
                {select_Users.map((user) => {
                    return (
                        <li key={user.id} onClick={() => SelectGroupUsersHandler(user.id, user.Name)} className="p-2 cursor-pointer hover:bg-slate-400 flex items-center">
                            <Avatar height="3" width="3" />
                            <span className="ml-2 text-xl font-semibold">{user.Name}</span>
                        </li>
                    )
                }
                )}
            </ul>
        </Card>
    )
}
export default AddGroupUser;