import React from "react"
import Avatar from "../../UI Components/Avatar"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Span from "../../UI Components/Span";

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
                                <Span
                                    contain={user.Name}
                                    size={"lg"}
                                    font={"medium"}
                                    color={"gray"}
                                    shade={300}
                                />
                            </div>
                            <Span
                                contain={"4:05pm"}
                                style={"absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium"}
                            />
                        </Link>
                    </li>
                )
                )
            }
        </ul>
    )
}

export default UsersList;