'use client';
import {useState} from 'react';
import Cards from './cards/card.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx';
import Food from './foods/food.jsx'
import BasicForm from '@/components/BasicForm.jsx';



export default function Home() {
  const [count, setCount] = useState(0)
  
  return (
    <main className='w-full'>
      {/* <CustomBtn name='Increment' OnBtnClick={() => setCount(count + 1)} />
      <h2>Count: {count}</h2>
      <CustomBtn name='Decrement' OnBtnClick={() => setCount(count - 1)} /> */}
      {/* <Counter /> */}

      <div>
        
      </div>
      
      <BasicForm />
      
    </main>
  )
}
