import { useState } from "react";

export default function LogIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true)

        console.log(`Email: ${email}, Password: ${password}`)
    }


    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-sky-900 p-8 rounded-2xl shadow-xl border border-gray-100">

                {/*Header*/}
                <div className="text-center">
                    <h1 className="font-black text-2xl">Cinemata</h1>
                    <p>Please enter your details to sign in</p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">

                        {/*Email Field*/}
                        <div > 
                            <label className="block text-lg font-black mb-5 text-left">Email Address: </label>
                            <input className='w-full px-4 py-3 border rounded-xl p-1' type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        {/*Password Field*/}
                        <div>
                            <label className="block text-lg font-black mb-5 text-left">Password: </label>
                            <input className='w-full px-4 py-3 border rounded-xl p-1' type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        {/*Log In Button*/}
                        <div className="text-center">
                            <button className="mt-4 font-black border rounded-xl px-5 py-2 cursor-pointer hover:bg-sky-500 ">Log In</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}