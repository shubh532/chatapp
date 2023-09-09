import { MessageInput } from "./MessageInput";
import Avatar from "../../UI Components/Avatar";
import ChatCard from "../../UI Components/ChatCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ShowMessage() {
    const users = useSelector(state => state.UserData.users)
    const id = useParams()
    const userData = users.filter(user => user.id === id.userId)

    return (
        <div className="text-white relative w-full h-full ">
            <div className="h-[10%] p-3 bg-gray-700">
                <div className="flex items-center">
                    <Avatar height="3" width="3" />
                    <div className="ml-4 flex flex-col">
                        <span className="font-medium text-lg">{userData[0].Name}</span>
                        <span className="text-xs">last seen today at 5:45 pm</span>
                    </div>
                </div>
            </div>
            <div className="h-[36.5rem] pl-6 pt-4 pb-2 pr-6 overflow-y-auto">
                <ChatCard color={"bg-slate-600 "} />
                <ChatCard color={"bg-slate-800"} />
                <ChatCard color={"bg-slate-800"} />
                <ChatCard color={"bg-slate-600 "} />
                <ChatCard color={"bg-slate-800"} />
                <ChatCard color={"bg-slate-600 "} />
                <ChatCard color={"bg-slate-600 "} />
                <ChatCard color={"bg-slate-800"} />

            </div>
            <MessageInput />
        </div>)
}
export default ShowMessage;