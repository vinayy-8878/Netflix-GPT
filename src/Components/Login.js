import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
    <div className='absolute'>
    <img src='	https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgImage'/>
    </div>
    <form className='rounded-lg bg-opacity-80 text-white w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black'>
       <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type='text' placeholder='Email Address' className='w-full my-4 p-4 bg-gray-700' />
        <input type='text' placeholder='Password' className='w-full my-4 p-4 bg-gray-700 '/>
      <button className='w-full p-4 my-6 bg-red-700'>Sign In</button>
    </form>
    </div>
  )
}

export default Login