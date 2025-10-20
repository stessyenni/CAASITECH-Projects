'use client'
import React from 'react'
import Link from 'next/link'
import LoginBtn from '@/app/authBtns/loginBtn'
import SignupBtn from '@/app/authBtns/signupBtn'

const Urlheader = () => {
  return (
    <div className='w-[80%] font-bold flex items-center justify-between'>
      <div className='w-[80%] text-gray-500 flex items-center gap-30'>
        <img src='./logo.svg' alt='' />
        <nav className='list-none flex gap-20 text-[18px] font-500 '>
          <li>
            <Link href='/features'>Features</Link>
          </li>
          <li>
            <Link href='/pricing'>Pricing</Link>
          </li>
          <li>
            <Link href='/resources'>Resources</Link>
          </li>
        </nav>
      </div>

      <div className='w-[20%] flex items-center justify-center gap-15'>
        <LoginBtn />
        <SignupBtn />
      </div>
    </div>
  )
}

export default Urlheader
