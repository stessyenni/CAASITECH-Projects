import React from 'react'

const UrlCard = ({image, title, intro}) => {
  return (
    <div className='w-full relative flex flex-col items-center justify-center'>
      <img className='w-[50px] h-[50px] bg-[#3a3051] rounded-full p-3 absolute left-3 bottom-5/6 size-[59px] top-' src={image} alt='' />
      <div className='w-[100%] h-fit bg-white rounded-lg p-5 flex flex-col items-center '>
        <h2 className='font-bold pt-5'>{title}</h2>
        <p className='w-full text-left p-10'>
          {intro}
        </p>
      </div>
    </div>
  )
}

export default UrlCard
