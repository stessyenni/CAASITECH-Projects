'use client'
import React from 'react'
import {useState} from 'react'
import { IoSunny } from "react-icons/io5";
import Todo from '../../components/Todo'


const TodoPage = () => {
    
  return (
      <main className='w-[55%] h- border-1 bg-[rgb(24,24,35)] flex flex-col items-center justify-between'>
          <div className='w-full h-[280px] relative bottom-10 bg-cover bg-[url(/bgdesktopdark.jpg)]'></div>
          <div className='w-[35%] absolute mt-0 flex flex-col gap-10'>
              <div className='w-full text-white font-bold flex justify-between'>
                  <h2 className='text-[30px]'>T O D O</h2>
                  <h2 className='text-[20px]'>{<IoSunny />}</h2>
              </div>
              <div className='w-full flex flex-col gap-100'>
                  <Todo /> 
              </div> 
          </div>
          <p className='text-[#4b4b69]'>Drag and drop to recorder list</p>
    </main>
  )
}

export default TodoPage
