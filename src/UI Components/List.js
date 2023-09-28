import { useState } from "react";
import Avatar from "./Avatar"
import PopUpCard from "./PopUpCard";
function List({ users, btn, btnName, BtnFuncs, UpdateGroupUser, isAdmin }) {
    const [popUpCard, SetPopUpCard] = useState(null)

    const PopUpCardHandler = (userId) => {
        SetPopUpCard(prevID => (prevID === userId ? null : userId))
    }

    const closePopUpCard = () => {
        SetPopUpCard(null)
    }

    const BtnHandler = BtnFuncs ? BtnFuncs : PopUpCardHandler

    return (
        <ul>
            {
                users.map(user =>
                (
                    <li key={user.id} className=" border-gray-500 rounded-lg p-2 flex items-center justify-between ">
                        <div className="flex items-center w-[72%]">
                            <Avatar height="2.5" width="2.5" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">{user.Name}</span>
                            </div>
                        </div>
                        {user.admin && <span className="text-xs p-1 border-2 border-gray-500 rounded-md bg-slate-900">Admin</span>}
                        <div>
                            {btn && <button onClick={() => BtnHandler(user.id)} className="hover:text-gray-400" >{btnName}</button>}
                            {popUpCard === user.id &&
                                <PopUpCard
                                    userId={user.id}
                                    isAdmin={isAdmin}
                                    UpdateGroupUser={UpdateGroupUser}
                                    users={users}
                                    popUpCardHandler={()=>closePopUpCard()}
                                />
                            }
                        </div>
                    </li>
                )
                )
            }
        </ul>
    )
}
export default List;