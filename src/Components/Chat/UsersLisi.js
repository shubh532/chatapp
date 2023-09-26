import React from "react"
import Avatar from "../../UI Components/Avatar"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function UsersList({ users }) {

    return (
        <ul>
            {
                users.map(user =>
                (
                    <li key={user.id} className="relative border-b-2 border-gray-500 rounded-lg p-2 ">
                        <Link className="flex items-center" to={`/${user.id}`}>
                            <Avatar height="3" width="3" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">{user.Name}</span>
                            </div>
                            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                        </Link>
                    </li>
                )
                )
            }
        </ul>
    )
}

export default UsersList;