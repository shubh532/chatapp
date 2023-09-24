import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { HiXMark } from "react-icons/hi2";
import { ShowUserInfoHandler } from "../../Redux/UserData";
import Avatar from "../../UI Components/Avatar";

function Profile() {
    const Dispatch = useDispatch()
    const Info = useSelector(state => state.UserData.Info)

    console.log(Info, "Info")

    const closeUserInfo = () => {
        Dispatch(ShowUserInfoHandler())
    }

    return (
        <div className="text-white relative w-full h-full ">
            <div className="h-[10%] sticky top-0 flex items-center p-3 bg-gray-700">
                <button onClick={() => closeUserInfo()}>
                    <HiXMark className="text-2xl" />
                </button>
                <span className="ml-4 text-lg">Contact Info</span>
            </div>
            <div className="flex p-6 bg-gray-800 flex-col items-center">
                <Avatar height="11" width="11" />
                <span className="text-lg">{Info[0].Name}</span>
                <span className="text-gray-500">{Info[0].mobile}</span>
                <span className="text-gray-500">{Info[0].email}</span>
            </div>
            <div className="p-5 mt-4 bg-gray-800">
                <h3 className="text-lg text-gray-500">About</h3>
                <span>We can't force people to choose us.</span>
            </div>
            <div className="p-5 mt-4 bg-gray-800">
                <span className="text-lg text-gray-500">
                    Common groups
                </span>
                <ul>
                    <li key={4} className="relative border-gray-500 rounded-lg p-2 ">
                        <Link className="flex items-center" to={`/xyz`}>
                            <Avatar height="3" width="3" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">Testing</span>
                            </div>
                            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                        </Link>
                    </li>
                    <li key={4} className="relative border-gray-500 rounded-lg p-2 ">
                        <Link className="flex items-center" to={`/xyz`}>
                            <Avatar height="3" width="3" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">Testing</span>
                            </div>
                            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                        </Link>
                    </li>
                    <li key={4} className="relative border-gray-500 rounded-lg p-2 ">
                        <Link className="flex items-center" to={`/xyz`}>
                            <Avatar height="3" width="3" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">Testing</span>
                            </div>
                            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                        </Link>
                    </li>
                    <li key={4} className="relative border-gray-500 rounded-lg p-2 ">
                        <Link className="flex items-center" to={`/xyz`}>
                            <Avatar height="3" width="3" />
                            <div className="ml-3">
                                <span className="text-lg font-medium text-white">Testing</span>
                            </div>
                            <span className="absolute right-0 top-1 mr-2 text-sm text-gray-500 font-medium">4:05pm</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;