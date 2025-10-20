'use client'
import {useRouter} from 'next/router'
import React from 'react'

const LoginBtn = () => {
  // const router = useRouter()
  return (
    <div>
      <button className='w-[50%] rounded-[20px] text-gray-500' type='button'>
          Login </button>
    </div>
  )
}

export default LoginBtn
