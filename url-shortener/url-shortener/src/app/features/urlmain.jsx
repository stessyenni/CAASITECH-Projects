import React from 'react'

const UrlMain = () => {
  return (
    <div className='w-full grid md:grid-cols-2  gap-10 pb-10'>
      <div className='w-[70%] border- flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <h1 className='sm:text-[70px] text-[#35313c] font-bold'>More than just shorter links</h1>
          <p className='text-[20px] font-bold text-gray-400'>
            Build your brands recognition and get detailed insights on how your links are performing
          </p>
        </div>
        <button className='w-[30%] h-[40px] border- text-white font-bold rounded-full bg-[#2cd1d1]'>
          Get Started
        </button>
      </div>
      
      <div className='w-full border-'>
        <img className='w-full' src='./illustration-working.svg' />
      </div>
    </div>
  )
}

export default UrlMain
