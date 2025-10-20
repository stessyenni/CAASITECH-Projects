import React from 'react'

const UrlCard = ({image, title, intro}) => {
  return (
    <div className='w-[80%] relative flex flex-col items-center'>
      <img className='w-[60px] h-[60px] bg-[#3a3051] rounded-full p-4 absolute left-4 bottom-5/6 size-[59px] top-' src={image} alt='' />
      <div className='h-[200px] bg-white rounded-lg flex flex-col items-center justify-center'>
        <h2 className=''>{title}</h2>
        <p className='text-center'>
          {intro}
        </p>
      </div>
    </div>
  )
}

export default UrlCard
