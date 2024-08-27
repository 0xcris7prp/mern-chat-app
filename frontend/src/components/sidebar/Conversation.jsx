import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
        <div className='w-12 rounded-full'>
            <img src="data:image/webp;base64,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" 
            alt="avatar user"/>
        </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-xl'>🐯</span>
            </div>
        </div>
        </div>

        <div className='divider my-0 py-0 h-1 '/>

    </>
   
  )
}

export default Conversation