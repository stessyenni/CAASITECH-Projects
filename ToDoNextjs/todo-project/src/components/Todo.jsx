import TodoItems from '@/components/TodoItems';
import React, {useEffect, useRef, useState} from 'react'
import {MdDeleteSweep} from 'react-icons/md';
import {IoRadioButtonOff, IoRadioButtonOn} from 'react-icons/io5';


const Todo = ({task, toggleComplete}) => {
  const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  // Using the inputRef to get the value that is entered in to the Input field.
  // And trim() will remove the extra space at the beginning
  const inputRef = useRef()

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') {
      return null;
    } // When no text is entered in the input field and the btn is clicked, null is displayed
    
    // The todoList will store the todos. A newTodo object is created to store the additional
    // data for the ToDO. The inputText is used to create the newTodo variables
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false, // means the status is either complete or not
    }
    setTodoList((prev) => [...prev, newTodo]); // get the previous Todo items & spread with the spread operator (...prev)
    inputRef.current.value = ''; // this is to clear the input field
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    }) // the id of the Todo item will be checked & if thesame, will be removed
  }
  
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete} // !todo.isComplete, this toggles the status to false or true when it is true and vice versa
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList)) // The JSON.stringify stores the input data in the broswer storage by converting the data to a string
  }, [todoList])
  return (
    <div className='h-[0px] border- bg-[#25273c] text-gray-500 flex flex-col gap-5 cursor-pointer'>
      <div className='h-[60px] bg-[#25273c] flex flex-row items-center gap-5 px-3'>
        <button onClick={add} className='' type='submit' >{<IoRadioButtonOff size={20} />}</button>
        <input ref={inputRef} className='w-full h-[50px] text-white focus:outline-none' type="text" placeholder="Create a new todo"
        />
      </div>

      <div className='bg-[#25273c]'>
        {todoList.map((item, index) => {
          return <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        })} 
        {/* <TodoItems text={'Learn Coding'} />
        <TodoItems text={'Learn JavaScript online course'} /> */}
        <div className='w-full bg- font-bold flex justify-between text-[#4b4b69] cursor-pointer'>
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
  )
}

export default Todo
