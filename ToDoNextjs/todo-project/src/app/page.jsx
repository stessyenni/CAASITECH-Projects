import React from 'react'
import ToDo from './ToDo/page'

export default function Home () {
  return (
    <div className='w-full m-h-screen bg-[rgb(24,24,35)] flex flex-col justify-between items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <div className='w-[1500] h-[280px] relative bottom-30 m-[] bg-cover bg-center bg-screen bg-[url(/bgdesktopdark.jpg)]'></div>
      <ToDo />
      <p className='text-[#4b4b69]'>Drag and drop to recorder list</p>
    </div>
  )
}
