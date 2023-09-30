import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AdminHandler } from "../Redux/Groups";

function Li(props) {
    return (
        <li className="p-2 rounded-md hover:bg-slate-600">{props.children}</li>
    )
}


function PopUpCard({ userId, isAdmin, users, popUpCardHandler }) {
    const groupId = useSelector(state => state.Group.groupId)
    const Dispatch = useDispatch()

    const makeAdminHandler = async () => {
        try {
            const Response = await axios.post(`http://localhost:4000/group/admin/${userId}`, { userId: userId, groupId: groupId })
            console.log(Response, "Response")
            if (Response.status === 200) {
                Dispatch(AdminHandler({ userId: userId, isAdmin: true }))
                popUpCardHandler()
            }
        } catch (err) {
            console.log(err)
            alert("Error Occure")
        }
    }
    const RemoveAsAdmin = async () => {
        const Admins = users.filter(user => user.admin === true)
        if (Admins.length === 1) {
            alert("At Least One ADMIN Require For Group")
            popUpCardHandler()
            return
        }
        try {
            const Response = await axios.post(`http://localhost:4000/group/admin/remove/${userId}`, { userId: userId, groupId: groupId })
            if (Response.status === 200) {
                Dispatch(AdminHandler({ userId: userId, isAdmin: false }))
                popUpCardHandler()
            }
        } catch (err) {
            console.log(err)
            alert("Error Occure")
        }
    }

    return (
        <div className="absolute rounded-md bg-slate-900 right-12 ">
            <ul>
                {isAdmin && <Li><button className="w-full text-left" onClick={() => makeAdminHandler()}>Make Admin</button></Li>}
                {isAdmin && < Li > <button className="w-full text-left">Remove from Group</button></Li>}
                {isAdmin && < Li > <button className="w-full text-left" onClick={() => RemoveAsAdmin()}>Remove from Admin</button></Li>}
                <Li><button className="w-full text-left">View Peofile</button></Li>
                <Li><button className="w-full text-left">Send Message</button></Li>
            </ul>
        </div >
    )
}

export default PopUpCard;