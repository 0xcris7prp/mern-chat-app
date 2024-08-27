import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
        <div className=' w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Login
        <span className='text-blue-500'> HackChat</span>
    </h1>
    <form>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type='text' placeholder='Enter your username' className='w-full input input-bordered h-10 bg-slate-800 text-white'/> 
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10 bg-slate-800 text-white'/> 
        </div>
        <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>
        <div>
            <button className='btn btn-block btn-sm mt-2 bg-slate-800 text-white'>Login</button>
        </div>
    </form>
</div>
</div>
  )
}

export default Login