import React from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import Avatar from "../../UI Components/Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
    const ChatList = useSelector(state => state.Messages.ChatList)

    const showUser = ChatList.map(user => {
        return (
            <li key={user.id} className="relative border-b-2 border-gray-500 rounded-lg p-2 ">
                <Link className="flex items-center" to={`/${user.id}`}>
                    <Avatar height="3" width="3" />
                    <div className="ml-3">
                        <span className="text-lg font-medium text-white">{user.Name}</span>
                    </div>
                    <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                </Link>
            </li>)
    })

    return (
        <div className="relative max-w-[28rem] bg-gray-900 h-screen">
            <SearchBar />
            <div className="h-[90%] overflow-y-auto">
                <ul>
                    {showUser}
                </ul>
            </div>
        </div >
    )
}

export default Home;