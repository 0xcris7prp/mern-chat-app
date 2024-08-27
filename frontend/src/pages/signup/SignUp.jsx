import React from 'react';
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className=' w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
    
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp
        <span className='text-blue-500'> HackChat</span>
    </h1>

    <form>
      <div>
            <label className='label p-2'>
                <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter your Name' className='w-full input input-bordered h-10 bg-slate-800 text-white'/> 
            
      </div>
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
          <input type='password' placeholder='Enter your password' className='w-full input input-bordered h-10 bg-slate-800 text-white'/>
      </div>
      
      <div>
          <label className='label p-2'>
             <span className='text-base label-text text-white'>Confirm Password</span>
          </label>
          <input type='password' placeholder='Enter your password' className='w-full input input-bordered h-10 bg-slate-800 text-white'/>
      </div>
      {/* Gender checkbox goes here */}
      <GenderCheckBox />

      <a href='#' className='text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>
        <div>
            <button className='btn btn-block btn-sm mt-2 bg-slate-800 text-white'>Register</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default SignUp