import React from 'react'
import {FaLocationDot} from "react-icons/fa6";
import {IoIosLink} from "react-icons/io";
import {VscTwitter} from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";

function DevFinder(props) {

  return (
      <>
          <form className='w-full'>
            
            <div className=' flex items-center relative'>
                
                <div className='mainSearch m-2 w-[45%] h-[65px] border-[2px] border-rgb(40, 40, 74) flex'>
                      <input className='w-[50%] relative left-10'
                          type="text"
                          placeholder='Search Github username'
                      />
                    <button className='Searchicon absolute left-8 top-2/6 -translate-x-1'>
                        <IoSearch className='text-2xl text-blue-700' />
                    </button>
                </div>

                

                <div className=''>
                      <input
                          className='w-fit
                          border-2-rgb(42, 102, 223)
                          rounded-[16px]
                          flex items-center justify-center
                          text-white 
                          bg-blue-600
                          absolute right-1/25 top-5 -translate-y-1'
                          type="text" placeholder='Search'
                      />
                </div>
            </div>
          </form>
          
          <div className='finderCard flex flex-col gap-10'>
              <div className='flex flex-row justify-space-between'>
                  <div className='flex flex-row gap-5'>
                      <img className='w-[70] h-[70] rounded-full' src={props.image} alt="Profile Picture" />
                      <div className='flex flex-col gap-5'>
                          <div className='flex flex-col gap-2'>
                              <h2 className='dev-title'>{props.title}</h2>
                              <h3 className='dev-Subtitle'>{props.Subtitle}</h3>
                          </div>

                          <p className='dev-para'>{props.para}</p>
                        </div>
                  </div>
                  
                  <div className='join-date'>
                      <h3>Joined 25 Jan 2011</h3>
                  </div>
              </div>

              <div className='stats'>
                  <p>Repos</p>
                  <p>Followers</p>
                  <p>Following</p>
              </div>

              <div className='flex gap-20'>
                  <div className='flex flex-col gap-5'>
                      <button className='flex gap-5 items-center'><FaLocationDot />none</button>
                      <button><IoIosLink /></button>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <button><VscTwitter /></button>
                      <button><FaLocationDot /></button>
                  </div>

              </div>
          </div>
      </>
  )
}

export default DevFinder
