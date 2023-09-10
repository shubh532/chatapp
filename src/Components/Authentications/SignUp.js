import { useRef, useState } from "react";
import axios from "axios";

function SignUp() {
    const [show, Unshow] = useState(false)
    const getName = useRef()
    const getEmail = useRef()
    const getMobile = useRef()
    const getPassword = useRef()


    const FormTogglingHandler = () => {
        Unshow(!show)
    }

    async function SignUpBtnHandler(e) {
        e.preventDefault()
        try {
            const Response = await axios.post("http://localhost:4000/authenction/signup", {
                Name: getName.current.value,
                Email: getEmail.current.value,
                Mobile: getMobile.current.value,
                Password: getPassword.current.value
            })
            if (Response.status === 201) {
                alert(Response.data.message)
            }
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    async function LoginBtnHandler(e) {
        e.preventDefault()
        try {
            const Response = await axios.post("http://localhost:4000/authenction/login", {
                Email: getEmail.current.value,
                Password: getPassword.current.value
            })
            if (Response.status === 200) {
                console.log(Response)
                const tokenID = Response.data.tokenID
                const userId = Response.data.userID
                localStorage.setItem("tokenID", tokenID)
                localStorage.setItem("userId", userId)
                alert(Response.data.message)
            }
        } catch (err) {
            alert(err.response.data.message)
        }
    }


    return (
        <div className='w-10/12 lg:w-2/5 md:w-3/5 p-6 shadow-lg shadow-gray-500 rounded-lg m-auto translate-y-24'>
            <h2 className="text-3xl mb-6 text-center">{show ? "SignUp" : "Login"}</h2>
            <form>
                {show && <div className="mb-5">
                    <label className='block text-lg' >Name</label>
                    <input type="text" ref={getName} required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="Your Full Name...." />
                </div>}
                <div className="mb-5">
                    <label className='block text-lg  ' >Email</label>
                    <input type="email" ref={getEmail} required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="abc@gmail.com" />
                </div>
                {show && <div className="mb-5">
                    <label className='block text-lg'>Mobile</label>
                    <input type="number" ref={getMobile} required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="1234 567 890" />
                </div>}
                <div className="mb-5 ">
                    <label className='block text-lg'>Password</label>
                    <input type="password" ref={getPassword} required className="w-full rounded-md shadow-sm focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="**********" />
                </div>
                <div className="flex justify-between ">
                    <button onClick={show ? SignUpBtnHandler : LoginBtnHandler} className="text-white bg-blue-500 mr-2 duration-300 focus:bg-blue-700 hover:bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{show ? "SignUp" : "Login"}</button>
                    <button onClick={FormTogglingHandler} className="text-blue-500 rounded-lg ml-2 hover:bg-blue-100 font-medium text-sm border-2 border-blue-500 duration-300 w-full sm:w-auto px-5 py-2.5 text-center">{show ? "Already Have Account" : "Don't Have Account"}</button>
                </div>
            </form>

        </div>
    )
}
export default SignUp;