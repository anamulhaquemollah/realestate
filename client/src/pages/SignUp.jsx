import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='max-w-xl p-10 mx-auto'>
      <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
      <form className='flex flex-col gap-5 p-8'>
        <input type="text" placeholder='username' className='border-2 outline-none p-3 rounded-lg' id='username'/>
        <input type="email" placeholder='email' className='border-2 outline-none p-3 rounded-lg' id='email'/>
        <input type="password" placeholder='password' className='border-2 outline-none p-3 rounded-lg' id='password'/>
        <button className='border p-3 bg-slate-700 rounded-lg text-white uppercase hover:bg-slate-600 font-bold'>Sign up</button>
        <div className='flex gap-2'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700 font-bold'>Sign In</span>
        </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp