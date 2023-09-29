import Avatar from "../../UI Components/Avatar"
import { HiMiniMagnifyingGlass, HiMiniUsers, HiMiniUser } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import { modalHandler } from "../../Redux/Modal"
import { ShowGroup, ShowUsers } from "../../Redux/UserData"
import Button from "../../UI Components/Button"

export function SearchBar() {
    const Dispatch = useDispatch()

    function groupBtnHandler() {
        Dispatch(modalHandler())
    }

    function GroupBtn() {
        Dispatch(ShowGroup(false))
    }

    function UsersBtn() {
        Dispatch(ShowUsers(true))
    }

    return (
        <>
            <div className=" grid grid-cols-8  p-3 w-auto h-[10%] justify-between bg-gray-700">

                <div className="col-span-1">
                    <Avatar height="3" width="3" />
                </div>

                <div className="flex col-span-6 p-1 items-center w-full bg-gray-800 rounded-lg">
                    <input className="w-80 text-white  bg-gray-800 border-none focus:ring-0" type="text" />
                    <HiMiniMagnifyingGlass className="text-2xl text-gray-500" />
                </div>

                <div className="col-span-1">
                    <Button
                        onClickFunc={groupBtnHandler}
                        icon={<HiMiniUsers className="text-3xl text-gray-400 ml-1 mr-2  " />}
                    />
                </div>

            </div>
            <div className="text-gray-400 flex items-center justify-around">

                <Button
                    icon={<HiMiniUser className="text-3xl text-gray-400 ml-1 mr-2  " />}
                    name={"Contacts"}
                    onClickFunc={UsersBtn}
                    w={"full"}
                />

                <Button
                    icon={<HiMiniUsers className="text-3xl text-gray-400 ml-1 mr-2  " />}
                    name={"Groups"}
                    onClickFunc={GroupBtn}
                    w={"full"}

                />

            </div>
        </>
    )
}
