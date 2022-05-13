function Landing() {
    return (
        <div className="w-full bg-slate-900 h-screen" >
            <h1 className="text-white text-xl text-left p-5">Let's get started!</h1>
            <div className="flex flex-wrap md:h-96 text-center text-white font-semibold">

                <div className="w-full h-full md:w-1/2 p-5">
                    <div className="w-4/5 h-96 p-50 mx-auto mt-10 px-6 pt-6 pb-2 rounded">
                        <div className="flex items-center mb-4">
                            <button className="w-full py-2 px-4 bg-slate-700 hover:bg-teal-300f text-white font-bold" type="button">Clone a Repository</button>
                        </div>
                        <div className="flex items-center mb-4">
                            <button className="w-full py-2 px-4 bg-slate-700 hover:bg-teal-300 text-white font-bold" type="button">Create a Repository</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="w-full py-2 px-4 bg-slate-700 hover:bg-teal-300 text-white font-bold" type="button">Open a Repository</button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-5 h-2/3b border-l border-teal-300 md:text-left">
                    <div className="flex items-center mb-4">
                        <input className="w-full h-10 p-2 border-b border-slate-700 bg-slate-800 text-white focus:border-teal-300" type="text" placeholder="Search"/>
                    </div>
                </div>
  
            </div>
        </div>
    )
}

export default Landing