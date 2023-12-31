import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import Picker from '@emoji-mart/react'
import { HiPaperAirplane } from "react-icons/hi2"
import { LiaGrinAlt, } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux"
import { addNewMessage } from "../../Redux/Messages"
import Button from "../../UI Components/Button"


export function MessageInput() {
    const [message, typeMessage] = useState("")
    const [showEmojiChart, unShowEmojiChart] = useState(false)
    const Id = useParams()
    const userID = useSelector(state => state.UserData.userId)
    const Dispatch = useDispatch()

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
        const date = new Date().toLocaleString()
        try {
            const Response = await axios.post(`http://localhost:4000/messages/sent_to/${Id.userId}`, { message, date, userID })
            const msg = Response.data.message
            Dispatch(addNewMessage(msg))
            console.log(msg, "msg")
            typeMessage("")
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
                <Button
                    onClickFunc={EmojiHandler}
                    icon={<LiaGrinAlt className="text-2xl" />}

                />

                <div className=" flex pl-2 w-full justify-between  bg-gray-800 rounded-lg">
                    <textarea value={message} onChange={getMessage} className="w-full mr-2 p-2 text-white  bg-gray-800 border-none focus:ring-0 " rows={1} type="textarea" />
                    <Button
                        onClickFunc={sendMessageHandler}
                        icon={<HiPaperAirplane className="text-2xl mr-2 text-gray-500" />}
                    />
                </div>
            </div>
        </>

    )
}