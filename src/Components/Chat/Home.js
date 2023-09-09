import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import Avatar from "../../UI Components/Avatar";
import { getUsers } from "../../Redux/UserData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
    const Dispatch = useDispatch()
    const users = useSelector(state => state.UserData.users)

    const getUsersHandler = async () => {
        try {
            const Response = await axios.get("http://localhost:4000/authenction/getusers")
            const users = Response.data.users
            Dispatch(getUsers(users))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log("useEffect Runing in Home")
        getUsersHandler()
    }, [])

    const showUser = users.map(user => {
        return (<li key={user.id} className="relative border-b-2 border-gray-500 rounded-lg p-2 ">
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
        <div className="relative max-w-[28rem] bg-gray-900 h-full">
            <SearchBar />
            <div className="h-[82%] overflow-y-auto">
                <ul>
                    {showUser}
                </ul>
            </div>
        </div >
    )
}

export default Home;