import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Li(props) {
    return (
        <li className="p-2 rounded-md hover:bg-slate-600">{props.children}</li>
    )
}


function PopUpCard({ userId, isAdmin, users, UpdateGroupUser, popUpCardHandler }) {
    const groupId = useSelector(state => state.Group.groupId)

    const makeAdminHandler = async () => {
        console.log("let go")
        try {
            const Response = await axios.post(`http://localhost:4000/group/admin/${userId}`, { userId: userId, groupId: groupId })
            console.log(Response, "Response")
            if (Response.status === 200) {
                const userIndex = users.findIndex(user => user.id === userId)
                users[userIndex].admin = true
                console.log(users[userIndex])
                UpdateGroupUser([...users])
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
                const userIndex = users.findIndex(user => user.id === userId)
                users[userIndex].admin = false
                UpdateGroupUser([...users])
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