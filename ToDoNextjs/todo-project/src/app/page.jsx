import React from 'react'
import ToDo from './ToDo/page'

export default function Home () {
  return (
    <div className='w-full bg-gray-300 flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
    <ToDo />
    </div>
  )
}
