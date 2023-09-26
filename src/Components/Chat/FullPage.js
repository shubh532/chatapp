import { Suspense, lazy, useEffect, useState } from "react";
import SideSection from "./SideSection";
import { Route, Switch } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { getUsers } from "../../Redux/UserData";
import { getGroups } from "../../Redux/Groups";
import Profile from "./Profile";
const ShowMessage = lazy(() => import("./ShowMessages"));


function ChatApp() {
    const [Loading, SetLoading] = useState(false)
    const Dispatch = useDispatch()
    const userId = useSelector(state => state.UserData.userId)
    const ShowUserInfo = useSelector(state => state.UserData.ShowUserInfo)

    const col = ShowUserInfo ? "col-span-3" : "col-span-5";

    const getUsersHandler = async () => {
        SetLoading(true)
        try {
            const Response = await axios.get(`http://localhost:4000/authenction/getusers/${userId}`)
            const users = Response.data.allUsers
            const groups = Response.data.userDetails.groups
            const allGroups = groups.map(grp => ({ id: grp.id, Name: grp.Name }))
            Dispatch(getUsers([...users]))
            Dispatch(getGroups([...allGroups]))
            SetLoading(false)

        } catch (err) {
            console.log(err)
            SetLoading(false)

        }
    }
    useEffect(() => {
        console.log("useEffect Runing in getUsersHandler FullPage")
        async function FetchData() { await getUsersHandler() }
        FetchData()
    }, [])

    return (
        <div className="h-full bg-gray-900 grid grid-cols-7" >
            <div className="col-span-2 "><SideSection /></div>
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
                (<div className="col-span-2 border-l-2 overflow-auto  border-gray-600">
                    <Profile />
                </div>)
            }
        </div >
    )

}

export default ChatApp;