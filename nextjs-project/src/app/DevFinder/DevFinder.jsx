import React from 'react'
import {FaLocationDot} from "react-icons/fa6";
import {IoIosLink} from "react-icons/io";
import {VscTwitter} from "react-icons/vsc";
import {IoSearch} from "react-icons/io5";
import {IoIosSunny} from "react-icons/io";
import { CgOrganisation } from "react-icons/cg";
// import SearchBar from '@/components/SearchBar';

function DevFinder(props) {
    const stats = [
        {
            stat: 'Repos',
            value: '8',
        },
        {
            stat: 'Foolowers',
            value: '3938',
        },
        {
            stat: 'Following',
            value: '9',
        },
    ]

    const details = [
        {
            detail: <FaLocationDot />,
            value: 'Yaounde',
        },
        {
            detail: <VscTwitter />,
            value: 'Not Available',
        },
        {
            detail: <IoIosLink />,
            value: 'Not Available',
        },
        {
            detail: <CgOrganisation />,
            value: '@github',
        },
    ]

  return (
      <div className='w-full min-h-[500px] font-mono rounded-lg p-20 bg-[#141d2f] flex flex-col gap-[20px] items-center'>
                
          <div className='w-[50%] text-white flex justify-between '>
              <h4 className='font-bold'>devfinder</h4>
              <h4 className='flex gap-4'>LIGHT {<IoIosSunny />}</h4>
          </div>

          <div className='w-[50%] flex flex-col gap-[20px]'>
              <div className='w-full h-[50px] bg-[#1e2a48] rounded-lg flex items-center relative'>
                  <button>
                      <IoSearch className='text-2xl text-blue-700' />
                  </button>
                  <input className='w-full text-white'
                      type="text"
                      value='Search Github username'
                  />
                  <input className='w-fit h-[40px] absolute top-[6px] bottom-[6px] right-2 bg-[#0079ff] px-[20px] rounded-lg'
                      type="button" value='Search' />
              </div>
              
              <div className='bg-[#1e2a48] rounded-lg flex flex-col gap-20'>
                  <div className='flex flex-col gap-10'>
                      
                      <div className='flex justify-between gap-5'>
                          <img className='w-[70] h-[70] rounded-full' src='./profile2.png' alt="Profile Picture" />
                          <div className='flex flex-col gap-5'>
                              <div className='flex flex-col gap-2'>
                                  <h2 className='text-white'>The Octacat</h2>
                                  <h3 className='text-[#15488c] font-bold'>@octacat</h3>
                              </div>
                              <p className='text-gray-400'>This profile has no bio</p>
                          
                              <div className='w-full flex flex-col gap-10 justify-center'>
                                  <div className='bg-[#141d2f] text-gray-400 flex items-center justify-around'>
                                      {
                                          stats.map((stat, index) => (
                                              <div className='flex flex-col gap-5 items-center justify-around rounded-lg py-2' key={index}>
                                                  <p>{stat.stat}</p>
                                                  <p>{stat.value}</p>
                                              </div>
                                          ))
                                      }
                                  </div>

                                  <div className='grid grid-cols-2 gap-y-[16px]'>
                                      {
                                          details.map((detail, index) => (
                                              <div className='flex items-center gap-16' key={index}>
                                                  <div className='text-white'>{detail.detail}</div>
                                                  <p className='text-gray-400'>{detail.value}</p>
                                              </div>
                                          ))
                                      }
                                  </div>
                              </div>
                          </div>
                          <h3 className='text-gray-400'>Joined 25 Jan 2011</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default DevFinder
