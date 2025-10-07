'use client';
import React from 'react'
import SearchBar from '@/components/SearchBar'
import DevHeader from './DevHeader'
import DevFinder from './DevFinder'
import { useEffect, useState } from 'react'

const page = () => {
    const [input, setInput] = useState('');
  console.log(input);
  let [data, setData] = useState('')

  const devfetch = async () => {
      
        const res = await fetch(`https://api.github.com/users/${input}`);
        const users = await res.json()
    setData(users);
    console.log(users);
    }

    // useEffect(() => {
    //     devfetch()
    // })

  return (
      <div className='font-mono rounded-lg p-30 bg-[#141d2f] flex flex-col gap-[20px] items-center'>
          <DevHeader />
          <SearchBar
              input={input}  
        setInput={setInput}
        onClick={devfetch}
        />
      <DevFinder
        data={data}
      />
    </div>
  )
}

export default page
