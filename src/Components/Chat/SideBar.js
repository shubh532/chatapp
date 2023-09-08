import Profile from "../../Assets/profile.jpg"
import { HiMiniMagnifyingGlass, HiPaperAirplane } from "react-icons/hi2"

export function SideHeader() {
    return (
        <div className=" flex  p-3 w-auto h-[10%] justify-between bg-gray-700">
            <div className="h-11 w-11 rounded-full  overflow-hidden bg-gray-300">
                <img src={Profile} alt="DP"></img>
            </div>
            <div className="flex p-2 items-center bg-gray-800 rounded-lg">
                <input className="w-80 text-white  bg-gray-800 border-none focus:ring-0" type="text" />
                <HiMiniMagnifyingGlass className="text-2xl text-gray-500" />
            </div>
        </div>
    )
}


export function SideFooter() {
    return (
        <div className=" flex w-full h-[8%] p-2 justify-betwee  bg-gray-700 items-center absolute bottom-0">
            <div className=" flex pl-2 w-full justify-between  bg-gray-800 rounded-lg">
                <input className="w-full mr-2 text-white  bg-gray-800 border-none focus:ring-0  " type="text" />
                <button><HiPaperAirplane className="text-2xl mr-2 text-gray-500" /></button>
            </div>
        </div>
    )
}