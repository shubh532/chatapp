import Home from "./Home";
import ShowMessage from "./ShowMessages";
import { Route, Switch } from "react-router-dom"

function ChatApp() {
    return (
        <div className="h-full bg-gray-900 grid grid-cols-7">
            <div className="col-span-2 "><Home /></div>
            <div className="col-span-5 border-l-2 border-gray-600">
                <Switch>
                    <Route path="/" exact>
                        <h1 className="text-white">Welcom to Chat App</h1>
                    </Route>
                    <Route path="/:userId">
                        <ShowMessage />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ChatApp;