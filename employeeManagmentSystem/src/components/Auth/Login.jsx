import React, { useState } from 'react'

const Login = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("email: ",email)
        console.log("password: ",password)
        setEmail("")
        setPassword("")
        
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-green-600 p-20 border-emerald-600">
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                name='email'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <input required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3'
                 type="password" placeholder='Enter your password' 
                 name='password'
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 />
                  <button 
                        className='text-white outline-none border-none py-3 px-5 text-xl rounded-full bg-emerald-600 mt-5 w-60'>
                        Log in
                    </button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
