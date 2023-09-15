import Avatar from "../../UI Components/Avatar"
import { HiMiniMagnifyingGlass, HiMiniUsers } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import { modalHandler } from "../../Redux/Modal"

export function SearchBar() {
    const Dispatch = useDispatch()

    function groupBtnHandler() {
        Dispatch(modalHandler())
    }

    return (
        <div className=" flex  p-3 w-auto h-[10%] justify-between bg-gray-700">
            <Avatar height="3" width="3" />
            <div className="flex p-1 items-center w-9/12 bg-gray-800 rounded-lg">
                <input className="w-80 text-white  bg-gray-800 border-none focus:ring-0" type="text" />
                <HiMiniMagnifyingGlass className="text-2xl text-gray-500" />
            </div>
            <button onClick={groupBtnHandler} className="rounded-full">
                <HiMiniUsers className="text-3xl text-gray-400 ml-1 mr-2  " />
            </button>
        </div>
    )
}
