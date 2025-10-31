'use client'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const SignupBtn = ({ isActive }) => {
    const router = useRouter()
  return (
    <div>
      <button className='w-[50px] h-[20px] text-[10px] md:w-[100px] md:h-[40px] p- bg-[#27d2d3] text-white rounded-full' type='button' onClick={() => router.push('/auth')}>
          Sign Up</button>
    </div>
  )
}

export default SignupBtn
