import React from 'react'
import {IoSearch} from "react-icons/io5";
//import {useState} from 'react';

const SearchBar = ({input, setInput, onClick}) => {
    return (
        <div className='min-w-[60%] min-w-[70%] h-[50px] px-10 bg-[#1e2a48] rounded-lg flex items-center relative'>
            <button>
                <IoSearch className='text-3xl absolute left-1 bottom-2 pl-2 text-blue-700' />
            </button>
            <input className='w-full focus:outline-none text-white' type="text" placeholder='Search Github username' value={input}
                onChange = {(e) => {setInput(e.target.value)}}
            />
            <input className='w-fit h-[40px] text-white absolute top-[6px] bottom-[6px] right-2 bg-[#0079ff] px-[20px] rounded-lg'
                type="button" value='Search' onClick={onClick}  />
        </div>
    )
}

export default SearchBar
