import { Suspense, lazy, useEffect } from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { getUsers } from "../../Redux/UserData";
const ShowMessage = lazy(() => import("./ShowMessages"));


function ChatApp() {

    const Dispatch = useDispatch()
    const userId = useSelector(state => state.UserData.userId)

    const getUsersHandler = async () => {
        try {
            const Response = await axios.get(`http://localhost:4000/authenction/getusers/${userId}`)
            const users = Response.data.users
            Dispatch(getUsers(users))
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
            <div className="col-span-5 border-l-2 border-gray-600">
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
        </div>
    )
}

export default ChatApp;