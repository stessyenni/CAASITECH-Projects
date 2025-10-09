import React from 'react'
import {BiCheckCircle} from 'react-icons/bi';
import {IoMdRadioButtonOff, IoMdRadioButtonOn} from 'react-icons/io';
import {MdDeleteSweep} from 'react-icons/md';


const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='h-[60px] border- bg-[#25273c] text-white px-3 font-bold flex items-center justify-between gap-5 cursor-pointer'>
      <div className='flex items-center gap-5 cursor-pointer'>
        <div className='flex items-center my-3'>
          <BiCheckCircle />
          <IoMdRadioButtonOff size={20} />
        </div>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      </div>
      <MdDeleteSweep size={24} onClick={() => deleteTodo(task.id)} />
    </div>
  )
}

export default Todo
