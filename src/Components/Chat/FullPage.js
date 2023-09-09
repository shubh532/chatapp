import Home from "./Home";
import ShowMessage from "./ShowMessages";
function ChatApp() {
    return (
        <div className="h-full bg-gray-900 grid grid-cols-7">
            <div className="col-span-2 "><Home /></div>
            <div className="col-span-5 "><ShowMessage /></div>
        </div>
    )
}

export default ChatApp;