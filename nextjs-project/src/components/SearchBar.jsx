import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <form className='searchBar w-full relative'>
            
            <div className='searchtab relative'>
                
                <div className='mainSearch'>
                    <input className=' relative left-10' type="text" placeholder='Search Github username' />
                    <button className='Searchicon absolute left-8 top-1/3 -translate-x-1'>
                        <IoSearch className='text-2xl text-blue-500' />
                    </button>
                </div>

                

                <div className='SubSearch'>
                    <input className='absolute right-1/30 top-5 -translate-y-1' type="text" placeholder='Search' />
                </div>
            </div>
        </form>
  )
}

export default SearchBar
