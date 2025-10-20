import React from 'react'

const UrlMain = () => {
  return (
    <div className='w-[80%] flex items-center justify-between gap-50'>
      <div className='w-[50%] border- flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[70px] font-bold'>More than just shorter links</h1>
          <p className='text-[20px] font-bold text-gray-500'>
            Build your brands recognition and get detailed insights on how your links are performing
          </p>
        </div>
        <button className='w-[30%] h-[40px] border- text-white font-bold rounded-full bg-[#2cd1d1]'>
          Get Started
        </button>
      </div>
      <div className='w-[45%]'>
        <img src='./illustration-working.svg' />
      </div>
    </div>
  )
}

export default UrlMain
