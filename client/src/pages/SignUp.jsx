import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({}); 
  const [loading, setLoading] = useState(false);
  const changeHandler = (e)=>{
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    })
  }

  const submitHandler =  async (e)=>{
    e.preventDefault(); 
    setLoading(true); 
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(formData)
    });
    console.log(res);
    const data = await res.json(); 
    console.log(data.success);
  } 
  return (
    <div className='max-w-xl p-10 mx-auto'>
      <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
      <form onSubmit={submitHandler} className='flex flex-col gap-5 p-8'>
        <input type="text" placeholder='username' className='border-2 outline-none p-3 rounded-lg' id='username' onChange={changeHandler} />
        <input type="email" placeholder='email' className='border-2 outline-none p-3 rounded-lg' id='email'onChange={changeHandler} />
        <input type="password" placeholder='password' className='border-2 outline-none p-3 rounded-lg' id='password' onChange={changeHandler} />
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