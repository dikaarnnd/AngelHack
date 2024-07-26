import React, { useState } from 'react';
import facebook from '../facebook.svg';
import google from '../google.svg';
import '../index.css';
// import '../pages.css';

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Lakukan validasi dan proses pendaftaran di sini
    };
    const handleClick = () => {
        setPasswordShown(!passwordShown);
    };    
    return (
        <div className='container h-screen mx-auto overflow-hidden'>
            <div className='flex flex-row h-screen items-center justify-center p-7 ml-4 gap-10'>
                <div className='flex-1 border border-black w-full items-center justify-center h-full rounded-3xl overflow-hidden'>
                    <img src='https://i.pinimg.com/564x/c1/61/c8/c161c8eb9755205f66a499c50d807ead.jpg' className='object-cover w-full h-full'/>
                </div>
                <div className='flex-1'>
                    <div className='flex-col mx-10'>
                        <button className='border border-gray-400 p-1 rounded-md'>
                            <a href='/'>Back</a>
                        </button>
                        
                        <div className="mt-4">
                            <span className='text-3xl font-bold'>Log in with</span>
                        </div>

                        <div className="flex flex-row mt-7 justify-between gap-8">
                            <button
                                type="submit"
                                className="flex text-black border border-gray-400 font-medium px-6 py-3 rounded-lg justify-center items-center gap-3 w-full"
                                >
                                <img src={google} className='h-4'/>
                                Google
                            </button>
                            <button
                                type="submit"
                                className="flex text-black border border-gray-400 font-medium px-6 py-3 rounded-lg justify-center items-center gap-3 w-full"
                                >
                                    <img src={facebook} className='h-4'/>
                                Facebook 
                            </button>
                        </div>
            
                        <div className="flex items-center justify-center py-6">
                            <div className="w-full h-px bg-gray-400"></div>
                            <span className="mx-2">or</span>
                            <div className="w-full h-px bg-gray-400"></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-sm font-bold">Email</label>
                                <div className='mt-1 flex items-center justify-center border border-gray-300 rounded-md '>
                                    <img src={google} className='pl-4 pr-2 h-4'/>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        placeholder='Enter your email'
                                        onChange={(event) => setEmail(event.target.value)}
                                        className=" px-1 py-1 items-center justify-center outline outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="password" className="block text-sm font-sans font-bold">Password</label>
                                <div className='mt-1 flex items-center justify-center border border-gray-300 rounded-md '>
                                    <img src={google} className='pl-4 pr-2 h-4'/>
                                    <input
                                        type={passwordShown ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        placeholder='Enter a strong password'
                                        onChange={(event) => setPassword(event.target.value)}
                                        className=" px-1 py-1 items-center justify-center outline outline-none w-full"
                                    />
                                    <button
                                        onClick={handleClick}
                                    >
                                        {passwordShown ? <img src={google} className='ml-2 mr-5 h-4'/> : <img src={facebook} className='ml-2 mr-5 h-4'/>}
                                    </button>
                                </div>
                            </div>

                            <div className='text-xs text-right underline pr-2 pt-1 text-gray-400 '>
                                <a href=''>
                                    Forgot password?
                                </a>
                            </div>
                
                            <div className="flex mt-6 justify-center">
                                <button
                                type="submit"
                                className="bg-blue-500 text-white font-medium px-20 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                >
                                Log in
                                </button>
                            </div>
                            <div className='flex mt-3 justify-center'>
                                <span className='text-sm px-1'>
                                    Already have an account?
                                </span>
                                <a href="/SignUp" className="text-sm font-medium hover:underline text-blue-500">
                                    Sign Up 
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
