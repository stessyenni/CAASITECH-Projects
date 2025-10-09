'use client'
import React from 'react'
import {useState} from 'react'
import { IoSunny } from "react-icons/io5";
import Header from './Todo1'
import ToDoList from './ToDoList1'
import ToDoAdd from '@/components/ToDoAdd'


const ToDoPage = () => {
    
  return (
      <main className='w-[70%] border-1 bg-[rgb(24,24,35)] flex flex-col items-center justify-between py-10'>
          <div className='w-full h-[280px] relative bottom-10 bg-mt-0 bg-[url(/bgdesktopdark.jpg)]'></div>
          <div className='w-[30%] absolute mt-20 flex flex-col gap-10'>
              <div className='w-full text-white font-bold flex justify-between'>
                  <h2 className='text-[30px]'>T O D O</h2>
                  <h2 className='text-[20px]'>{<IoSunny />}</h2>
              </div>
              <div className='w-full flex flex-col gap-10'>
                  <ToDoList /> 
                  <div className='w-full bg-[#25273c] flex justify-between text-[#4b4b69] cursor-pointer'>
                        <p>5 hours left</p>
                        <div className='cursor-pointer flex gap-10'>
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                        <div className='cursor-pointer flex gap-3'>
                            <button>Clear</button>
                            <button>Completed</button>
                        </div>
                    </div>
              </div> 
          </div>
          <p className='text-[#4b4b69]'>Drag and drop to recorder list</p>
    </main>
  )
}

export default ToDoPage
