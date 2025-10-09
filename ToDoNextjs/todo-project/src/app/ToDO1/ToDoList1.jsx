import React, {useState} from 'react'
import {IoRadioButtonOff} from "react-icons/io5";
import ToDoAdd from '@/components/ToDoAdd'
import Todo from './Todo1'
import {v4 as uuidv4} from 'uuid'
uuidv4();

const ToDoList = () => {
    const [todos, setToDos] = useState([])

    const addTodo = todo => {
        setToDos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    }

    const toggleComplete = id => {
        setToDos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setToDos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div className='h-full  text-white flex flex-col justify-between'>
          <div className='flex flex-col'>
              <ToDoAdd
                addTodo={addTodo}
              />    
          </div>
          <div className=''>
                  {todos.map((todo, index) => (
                  <Todo
                      task={todo}
                      key={index}
                      toggleComplete={toggleComplete}
                      deleteTodo={deleteTodo}
                  />
              ))}
              </div>
    </div>
  )
}

export default ToDoList
