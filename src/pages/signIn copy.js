import React, { useState } from 'react';
import facebook from '../facebook.svg';
import google from '../google.svg';

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Lakukan validasi dan proses pendaftaran di sini
    };
    return (
        
        <div className='container'>
            <div className='flex flex-row justify-evenly m-10'>
            
                {/* gambar */}
                <div className='flex'>  
                    <img src='https://i.pinimg.com/564x/b6/f2/5a/b6f25a158596e4bf8a8290ee08a51b33.jpg' className='rounded-3xl h-13 border border-orange-500'/>
                </div>
        
                {/* SignIn */}
                <div className='flex flex-col'>
                    <div className="mt-4">
                        <span className='text-2xl font-bold'>Sign in with</span>
                    </div>
        
                    <div className="flex flex-row mt-4 justify-between gap-4">
                        <button
                            type="submit"
                            className="flex text-black border border-gray-400 font-medium px-6 py-3 rounded-md items-center gap-3 w-full"
                            >
                            <img src={google} className='h-4'/>
                            Google
                        </button>
                        <button
                            type="submit"
                            className="flex text-black border border-gray-400 font-medium px-6 py-3 rounded-md items-center gap-3 w-full"
                            >
                                <img src={facebook} className='h-4'/>
                            Facebook 
                        </button>
                    </div>
        
                    <div className="flex items-center justify-center">
                        <div className="w-full h-px bg-gray-400"></div>
                        <span className="mx-2">or</span>
                        <div className="w-full h-px bg-gray-400"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm font-bold">Username</label>
                        <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline focus:outline-1 w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-bold">Email</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline focus:outline-1 w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-sans font-bold">Password</label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline focus:outline-1 w-full"
                        />
                    </div>
        
                    <span className='text-xs px-3 text-gray-400'>
                        *Minimum length in 6 characters.
                    </span>
        
                    <div className="flex mt-6 justify-center">
                        <button
                        type="submit"
                        className="bg-blue-500 text-white font-medium px-20 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        Sign In
                        </button>
                    </div>
                    </form>
                    
                    <div className='flex mt-3 justify-center'>
                    <span className='text-sm font-medium px-1'>
                        Don't have an account?
                    </span>
                    <a href="/SignUp" className="text-sm font-medium hover:underline text-blue-500">
                        Sign Up 
                    </a>
                    </div>
        
                </div>
            </div>
        </div>
    );
}
