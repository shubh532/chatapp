function SignUp() {
    return (
        <div className='w-10/12 lg:w-2/5 md:w-3/5 p-6 shadow-lg shadow-gray-500 rounded-lg m-auto translate-y-24'>
            <h2 className="text-3xl mb-6 text-center">SignUp</h2>
            <form>
                <div className="mb-5">
                    <label className='block text-lg' >Name</label>
                    <input type="text" required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="Your Full Name...." />
                </div>
                <div className="mb-5">
                    <label className='block text-lg  ' >Email</label>
                    <input type="email" required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="abc@gmail.com" />
                </div>
                <div className="mb-5">
                    <label className='block text-lg'>Mobile</label>
                    <input type="number" required className="w-full rounded-md shadow-sm  focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="1234 567 890" />
                </div>
                <div className="mb-5 ">
                    <label className='block text-lg'>Password</label>
                    <input type="password" required className="w-full rounded-md shadow-sm focus:border-blue-200 shadow-gray-400 border border-gray-400 focus:border-2" placeholder="**********" />
                </div>
                <button className="text-white bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">SignUp</button>
            </form>

        </div>
    )
}
export default SignUp;