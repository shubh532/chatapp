import { useEffect, useState } from "react";
import axios from "axios";
import { MessageInput } from "./MessageInput";
import Avatar from "../../UI Components/Avatar";
import ChatCard from "../../UI Components/ChatCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getMessagesHandler } from "../../Redux/Messages";
import { ShowUserInfoHandler, getInfo } from "../../Redux/UserData";

function ShowMessage() {
    const [Loading, SetLoading] = useState(false)
    const Dispatch = useDispatch()
    const ChatList = useSelector(state => state.Messages.ChatList)
    const userId = useSelector(state => state.UserData.userId)
    const messages = useSelector(state => state.Messages.messages)
    const id = useParams()
    const user2Id = id.userId
    const Info = ChatList.filter(user => user.id === id.userId)

    Dispatch(getInfo(Info))

    const ShowUserInfo = () => {
        Dispatch(ShowUserInfoHandler())
    }

    const getUserMessages = async () => {
        SetLoading(true)
        try {
            const Response = await axios.get(`http://localhost:4000/messages/${userId}/${user2Id}`)
            const Messages = Response.data.messages
            Dispatch(getMessagesHandler(Messages))
            SetLoading(false)
        } catch (err) {
            console.log(err)
            SetLoading(false)
        }
    }
    useEffect(() => {
        getUserMessages()
    }, [user2Id])
    return (
        <div className="text-white relative w-full h-full ">
            <div className="h-[10%] p-3 bg-gray-700">
                <button className="flex items-center" onClick={() => ShowUserInfo()}>
                    <Avatar height="3" width="3" />
                    <div className="ml-4 flex flex-col items-start">
                        <span className="font-medium text-lg">{Info[0].Name}</span>
                        <span className="text-xs">last seen today at 5:45 pm</span>
                    </div>
                </button>
            </div>
            {Loading ?
                <div className="text-white text-2xl w-full h-full flex items-center justify-center">Loading</div> :
                <ul className="h-[36.5rem] pl-6 pt-4 pb-2 pr-6 overflow-y-auto">
                    {messages.map(msg =>
                        <ChatCard key={msg.id} color={"bg-slate-600 "} message={msg.message} time={msg.time_stamp} />
                    )}
                </ul>}
            <MessageInput />
        </div>)
}
export default ShowMessage;