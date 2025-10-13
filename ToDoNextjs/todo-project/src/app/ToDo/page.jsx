'use client'
import React from 'react'
import {useState} from 'react'
import { IoSunny } from "react-icons/io5";
import Todo from '../../components/Todo'

const TodoPage = () => {
    
  return (
      <main className=' h-full flex flex-col items-center'>
          
          <div className='w-[55%] absolute top-10 mt-5 flex flex-col items-center gap-10'>
              <div className='w-full text-white font-bold flex justify-between'>
                  <h2 className='text-[30px]'>T O D O</h2>
                  <h2 className='text-[20px]'>{<IoSunny />}</h2>
              </div>
              <div className='w-full flex flex-col gap-100'>
                  <Todo /> 
              </div> 
          </div>
          
    </main>
  )
}

export default TodoPage
