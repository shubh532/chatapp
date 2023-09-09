import axios from "axios"
import { useState } from "react"
import Picker from '@emoji-mart/react'
import { HiPaperAirplane } from "react-icons/hi2"
import { LiaGrinAlt, } from "react-icons/lia";


export function MessageInput() {
    const [message, typeMessage] = useState("")
    const [showEmojiChart, unShowEmojiChart] = useState(false)

    const onClickEmojiHandler = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        typeMessage(message + emoji);
    }

    const EmojiHandler = () => {
        unShowEmojiChart(!showEmojiChart)
    }

    const getMessage = (e) => {
        typeMessage(e.target.value)
    }

    const sendMessageHandler = async () => {
        console.log(message)
        try {
            const Response = await axios.post("http://localhost:4000/chat_app/messages", { message: message })
            console.log(Response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            {showEmojiChart &&
                <div className="absolute bottom-0">
                    <Picker skin={5} onEmojiSelect={onClickEmojiHandler} previewPosition={"none"} />
                </div>
            }
            <div className=" flex w-full p-2 bg-gray-900 items-center absolute bottom-0">
                <button onClick={EmojiHandler} className="text-3xl mr-2 text-gray-500" >
                    <LiaGrinAlt />
                </button>

                <div className=" flex pl-2 w-full justify-between  bg-gray-800 rounded-lg">
                    <textarea value={message} onChange={getMessage} className="w-full mr-2 p-2 text-white  bg-gray-800 border-none focus:ring-0 " rows={1} type="textarea" />
                    <button onClick={sendMessageHandler}><HiPaperAirplane className="text-2xl mr-2 text-gray-500" /></button>
                </div>
            </div>
        </>

    )
}