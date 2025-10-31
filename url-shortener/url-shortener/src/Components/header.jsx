'use client'
import React from 'react'
import Link from 'next/link'
import LoginBtn from '@/app/authBtns/loginBtn'
import SignupBtn from '@/app/authBtns/signupBtn'
import {usePathname} from 'next/navigation'

const Urlheader = () => {
  const currentPath = usePathname()
  const pages = [
    {name: 'Features', path: '/features'},
    {name: 'Pricing', path: '/pricing'},
    {name: 'Resources', path: '/resources'},
  ]
  
  const isActive = (path) => {
    return currentPath === path
  }
  return (
    <section className='flex md:justify-between p-5 items-center gap-13'>
      <div className='w-fit text-gray-500 flex md:gap-10 md:p-5 md:items-center gap-5 md:justify-center'>
        <img className='w-[20%] md:w-full' src='./logo.svg' />
        <nav className='w-[70%]  md:w-[70%] list-none flex  text-[10px] md:text-[18px] font-bold'>
            <ul className='list-none flex md:gap-10 gap-5 md:text-[18px] font-bold'>
              {pages.map((page, index) => (
              <li key={index}>
            <Link href={page.path} className={`transition-colors duration-300 ${isActive(page.path) ? 'text-[#33c59b] underline underline-offset-8 decoration-2' : ''}`}>{page.name}</Link>
          </li>
            ))}
            </ul>
        </nav>
      </div>

      <div className='w-[30%] md:w-[30%] md:pr-5 flex md:items-center md:justify-center md:gap-10'>
        <LoginBtn />
        <SignupBtn />
      </div>
    </section>
  )
}

export default Urlheader
