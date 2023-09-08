import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SideHeader, SideFooter } from "./SideBar";
import Profile from "../../Assets/profile.jpg"
import { getUsers } from "../../Redux/UserData";

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
        return (<li className="relative border-b-2 border-gray-500 rounded-lg p-2 flex items-center">
            <div className="h-12 w-12 rounded-full  overflow-hidden bg-gray-300">
                <img src={Profile} alt="DP"></img>
            </div>
            <div className="ml-3">
                <span className="text-lg font-medium text-white">{user.Name}</span>
            </div>
            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
        </li>)
    })

    return (
        <div className="relative max-w-[28rem] bg-gray-900 h-full">
            <SideHeader />
            <div className="h-[82%] overflow-y-auto">
                <ul>
                    {showUser}
                </ul>
            </div>
            <SideFooter />
        </div >
    )
}

export default Home;