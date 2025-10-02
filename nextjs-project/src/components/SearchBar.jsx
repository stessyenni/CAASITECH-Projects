import React from 'react'
import {IoSearch} from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className='w-[60%] h-[50px] bg-[#1e2a48] rounded-lg flex items-center relative'>
            <button>
                <IoSearch className='text-2xl text-blue-700' />
            </button>
            <input className='w-full text-white' type="text" value='Search Github username' />
            <input className='w-fit h-[40px] absolute top-[6px] bottom-[6px] right-2 bg-[#0079ff] px-[20px] rounded-lg'
                type="button" value='Search' />
        </div>
    )
}

export default SearchBar
