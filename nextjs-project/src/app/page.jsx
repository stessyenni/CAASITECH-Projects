'use client';
import {useState} from 'react';
import Card from './cards/card.jsx'


export default function Home() {
  const[count, setCount] = useState(0)
  return (
    <main>
      {/* <CustomBtn name='Increment' OnBtnClick={() => setCount(count + 1)} />
      <h2>Count: {count}</h2>
      <CustomBtn name='Decrement' OnBtnClick={() => setCount(count - 1)} /> */}
      {/* <Counter /> */}
      <Card />
    </main>
  )
}
