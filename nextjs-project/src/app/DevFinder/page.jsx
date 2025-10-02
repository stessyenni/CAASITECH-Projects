import React from 'react'
import SearchBar from '@/components/SearchBar'
import DevHeader from './DevHeader'
import DevFinder from './DevFinder'

const page = () => {
  return (
      <div className='font-mono rounded-lg p-30 bg-[#141d2f] flex flex-col gap-[20px] items-center'>
          <DevHeader />
          <SearchBar />
          <DevFinder />
    </div>
  )
}

export default page
