'use client'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[75%] h-[100px] border-1 rounded-lg bg-cover bg-screen bg-[url(/bg-shorten-mobile.svg)] flex items-center gap-15 px-10'>
      <input className='w-[80%] h-[40px] pl-8 border-1 bg-white rounded-lg' type="text" name="" id="" placeholder='Shorten a link here...' />
      <button className='w-[20%] h-[25%] rounded-lg border- text-white font-bold text-[18px] bg-[#2cd1d1] '>Shorten It!</button>
    </div>
  )
}

export default SearchBar
