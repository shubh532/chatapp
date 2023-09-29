import { useState } from "react";
import Avatar from "./Avatar"
import PopUpCard from "./PopUpCard";
import Button from "./Button";
import Span from "./Span";
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
                                <Span
                                    contain={user.Name}
                                    size={"lg"}
                                    font={"medium"}
                                />
                            </div>
                        </div>
                        {
                            user.admin &&
                            <Span
                                contain={"Admin"}
                                color={"gray"}
                                shade={300}
                                size={"xs"}
                                style={"p-1 border-2 border-gray-500 rounded-md bg-slate-900"}
                            />
                        }
                        <div>
                            {btn && <Button
                                onClickFunc={() => BtnHandler(user.id)}
                                icon={btnName}
                            />}
                            {popUpCard === user.id &&
                                <PopUpCard
                                    userId={user.id}
                                    isAdmin={isAdmin}
                                    UpdateGroupUser={UpdateGroupUser}
                                    users={users}
                                    popUpCardHandler={() => closePopUpCard()}
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