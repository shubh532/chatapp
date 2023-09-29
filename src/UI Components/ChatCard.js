import React from "react";
import Avatar from "./Avatar";
import { HiOutlineArrowUpRight } from "react-icons/hi2"
import Span from "./Span";

function ChatCard(props) {
    const { color, message, time } = props
    return (
        <li className="flex items-start ">
            <Avatar height="1.5" width="1.5" />
            <div className={`${color} mt-3 mb-3 relative p-3 rounded-lg max-w-3xl ml-3`}>
                <div className="relative min-w-[6rem]">
                    {message}
                    <div className=" flex items-center  ">
                        <Span contain={time} size={"sm"} color={"gray"} shade={300} />
                        <Span contain={<HiOutlineArrowUpRight />} />
                    </div>
                </div>


            </div>
        </li>
    )
}

export default ChatCard;