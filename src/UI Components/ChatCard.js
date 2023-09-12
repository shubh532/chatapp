import React from "react";
import Avatar from "./Avatar";
import { HiOutlineArrowUpRight } from "react-icons/hi2"

function ChatCard(props) {
    const { color, message, time } = props
    return (
        <li className="flex items-start ">
            <Avatar height="1.5" width="1.5" />
            <div className={`${color} mt-3 mb-3 relative p-3 rounded-lg max-w-3xl ml-3`}>
                <div className="relative min-w-[6rem]">
                    {message}
                    <div className=" flex items-center  ">
                        <span className="text-sm  text-gray-300 ">4:50pm</span>
                        <span className="text-gray-30 "><HiOutlineArrowUpRight /></span>
                    </div>
                </div>


            </div>
        </li>
    )
}

export default ChatCard;