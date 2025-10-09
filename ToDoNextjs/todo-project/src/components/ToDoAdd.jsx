'use client'
import React, {useState} from 'react'
import { IoRadioButtonOff } from "react-icons/io5";

const ToDoAdd = ({addTodo}) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(input)
        setInput('')
    }
  return (
    <div className=' bg-[#25273c] text-white'>
          <form className='h-[60px] bg-[#25273c] flex flex-row items-center gap-5 px-3' onSubmit={handleSubmit}>
              <button className='' type='submit' >{<IoRadioButtonOff size={20} />}</button>
              <input className='w-full h-[60px]  focus:outline-none' type="text" placeholder="Create a new todo" value={input}
              onChange = {(e) => {setInput(e.target.value)}}
              />
          </form>
    </div>
  )
}

export default ToDoAdd
