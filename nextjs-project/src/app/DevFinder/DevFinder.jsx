
import React from 'react'
import {FaLocationDot} from "react-icons/fa6";
import {IoIosLink} from "react-icons/io";
import {TiSocialTwitter} from "react-icons/ti";
import { CgOrganisation } from "react-icons/cg";

function DevFinder() {
    const stats = [
        {
            stat: 'Repos',
            value: '8',
        },
        {
            stat: 'Followers',
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
            detail: <TiSocialTwitter />,
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
      <div className='w-[60%] bg-[#1e2a48] rounded-lg p-20 row flex gap-5'>
          <div>
              <img className='w-full h-[65px] rounded-full' src='./profile2.png' alt="Profile Picture" />
          </div>
          <div className='flex flex-col gap-20'>
              <div className='flex justify-between'>
                  <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-5'>
                          <p className='text-white'>The Octacat</p>
                          <p className='text-[#15488c] font-bold'>@octacat</p>
                      </div>
                      <p className='text-gray-400'>This profile has no bio</p>
                  </div>
                  <p className='text-gray-400'>Joined 25 Jan 2011</p>
              </div>
              
              <div className='flex flex-col gap-20'>
                  <div className='rounded-lg bg-[#141d2f] flex items-center justify-around px-20 gap-20'>
                      {
                          stats.map((stat, index) => (
                                      <div className='flex flex-col gap-5 items-center justify-around rounded-lg py-2' key={index}>
                                          <p className='text-gray-400'>{stat.stat}</p>
                                          <p className='text-white font-bold text-[20px]'>{stat.value}</p>
                                      </div>
                                  ))
                              }
                          </div>
                          <div className='grid grid-cols-2 gap-[30px]'>
                              {
                                  details.map((detail, index) => (
                                      <div className='flex items-center gap-[16px]' key={index}>
                                          <div className='text-[20px] text-white'>{detail.detail}</div>
                                          <p className='text-gray-400'>{detail.value}</p>
                                      </div>
                                  ))
                      }
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DevFinder
