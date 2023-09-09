import React from "react";
import Avatar from "./Avatar";
import { HiOutlineArrowUpRight } from "react-icons/hi2"

function ChatCard(props) {
    const {color,}=props
    return (
        <div className="flex items-start ">
            <Avatar height="1.5" width="1.5" />
            <div className={`${color} mt-3 mb-3 relative p-3 rounded-lg max-w-3xl ml-3`}>
                <div className="relative min-w-[6rem]">
                    YouYou can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.

                    <div className=" absolute right-0 flex items-center bottom-0 ">
                        <span className="text-sm  text-gray-300 ">4:50pm</span>
                        <span className="text-gray-30 "><HiOutlineArrowUpRight /></span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ChatCard;