import Avatar from "../../UI Components/Avatar"
import { HiMiniMagnifyingGlass } from "react-icons/hi2"

export function SearchBar() {
    return (
        <div className=" flex  p-3 w-auto h-[10%] justify-between bg-gray-700">
            <Avatar height="3" width="3" />
            <div className="flex p-2 items-center bg-gray-800 rounded-lg">
                <input className="w-80 text-white  bg-gray-800 border-none focus:ring-0" type="text" />
                <HiMiniMagnifyingGlass className="text-2xl text-gray-500" />
            </div>
        </div>
    )
}
