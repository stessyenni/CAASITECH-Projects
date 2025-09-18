import React, {useState} from 'react'

// const CustomBtn = ({name, OnBtnClick}) => {
//   return (
//     <div>
//       <button onClick={OnBtnClick}>{name}</button>
//     </div>
//   )
// }

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='custombutton'>
      <h1 className='countdisplay'>{count}</h1>
        <button className='countbtn1' onClick={increment}>Increment</button>
        <button className='countbtn2' onClick={decrement}>Decrement</button>
    </div>
  )
}

// export default CustomBtn
export default Counter
