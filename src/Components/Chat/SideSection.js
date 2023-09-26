import React from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import UsersList from "./UsersLisi";

function SideSection() {
    const users = useSelector(state => state.UserData.users)
    const groups = useSelector(state => state.Group.groups)
    const ShowUser = useSelector(state => state.UserData.ShowUsers)

    return (
        <div className="relative max-w-[28rem] bg-gray-900 h-screen">

            <SearchBar />

            <div className="h-[83%] overflow-y-auto">
                {ShowUser && <UsersList users={users} />}
                {!ShowUser && <UsersList users={groups} />}
            </div>

        </div >
    )
}

export default SideSection;