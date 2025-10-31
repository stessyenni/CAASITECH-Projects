'use client'
import {useRouter} from 'next/navigation'
import React from 'react'

const LoginBtn = ({isActive}) => {
  const router = useRouter()
  return (
    <div className='md:w-[50%]'>
      <button className='w-[50px] text-[15px] md:w-full text-gray-500' type='button' onClick={() => router.push('/auth')}>
          Login </button>
    </div>
  )
}

export default LoginBtn
