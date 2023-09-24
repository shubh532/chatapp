import { Suspense, lazy, useEffect } from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { getUsers } from "../../Redux/UserData";
import { getGroups } from "../../Redux/Groups";
import { getAllChatList } from "../../Redux/Messages";
import Profile from "./Profile";
const ShowMessage = lazy(() => import("./ShowMessages"));


function ChatApp() {

    const Dispatch = useDispatch()
    const userId = useSelector(state => state.UserData.userId)
    const ShowUserInfo = useSelector(state => state.UserData.ShowUserInfo)
    let col
    if (ShowUserInfo) {
        col = "col-span-3"
    } else {
        col = "col-span-5"
    }

    const getUsersHandler = async () => {
        try {
            const Response = await axios.get(`http://localhost:4000/authenction/getusers/${userId}`)
            const users = Response.data.allUsers
            const groups = Response.data.userDetails.groups
            const allGroups = groups.map(grp => ({ id: grp.id, Name: grp.Name }))
            Dispatch(getUsers([...users]))
            Dispatch(getGroups([...allGroups]))
            Dispatch(getAllChatList([...users, ...allGroups]))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log("useEffect Runing in getUsersHandler FullPage")
        getUsersHandler()
    }, [])


    return (
        <div className="h-full bg-gray-900 grid grid-cols-7">
            <div className="col-span-2 "><Home /></div>
            <div className={`${col} border-l-2 border-gray-600`}>
                <Switch>
                    <Route path="/" exact>
                        <h1 className="text-white">Welcom to Chat App</h1>
                    </Route>
                    <Route path="/:userId">
                        <Suspense fallback={<div className="text-white text-2xl w-full h-full flex items-center justify-center">Loading...</div>}>
                            <ShowMessage />
                        </Suspense>
                    </Route>
                </Switch>
            </div>
            {ShowUserInfo &&
                <div className="col-span-2 border-l-2 overflow-auto  border-gray-600">
                    <Profile />
                </div>
            }
        </div>
    )
}

export default ChatApp;