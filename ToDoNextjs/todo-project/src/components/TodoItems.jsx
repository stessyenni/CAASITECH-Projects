import React from 'react'
import {BiCheckCircle} from 'react-icons/bi';
import {IoRadioButtonOff} from 'react-icons/io5';
import {MdDeleteSweep} from 'react-icons/md';
// import tick from '../../public/tick.png';
// import not_tick from '../../public/not_tick.jpeg';

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
    
  return (
    <div className='h-[60px] border-[0.5px] bg-[#25273c] flex items-center px-3 my- mx- gap-2'>
          <div onClick={() => {toggle(id)}} className='flex flex-1 items-center py-5 cursor-pointer'>
              
              <div> 
                  {isComplete ? <BiCheckCircle size={20} /> : <IoRadioButtonOff size={20} />}
              </div> 
              <div className=''>
                  <p className={`ml-4 decoration-slate-500 text-gray-300 ${isComplete ? 'line-through text-gray-500'  : ''}`}>
                {text}
                </p>
              </div>
              {/* <IoMdRadioButtonOff size={20} /> */}
          </div>
          <MdDeleteSweep size={24} onClick={() => {deleteTodo(id)}} />
      </div>
      // The if/else is used to toggle between the complete/incomplete task
  )
}

export default TodoItems
