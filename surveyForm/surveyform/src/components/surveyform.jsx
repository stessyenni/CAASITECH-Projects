import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import * as Yup from 'yup'

export default function SurveyForm() {
  // create a handleChange variable to handle the change event of the input fields to add data using the onChange function
        const handleChange = (e) => {
        let {name, value} = e.target;
            SetFormData({
                ...formData,
                [name]: value,
            });
        }
  return (
    <div className='w-full p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] flex flex-col gap-12'>
      <h1 className='font-bold text-center text-[24px] text-[#000249] '>New Employee Data Survey Form</h1>

      <form className='text-[13.7px] flex flex-col gap-5 lg:pl-10'>
        <div className=''>
          <label htmlFor='fullname' className='font-bold text-[16px]'>
            1. What are your full names?
          </label>
          <input
            className='lg:w-[40%] h-11 border rounded-lg px-3'
            type='text'
            id='fullname'
            placeholder='e.g John Doe' />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='age' className='font-bold text-[16px]'>
            2. Which is your Age Range?
          </label>
          <div className='lg:w-[50%] grid grid-cols-2 gap-y-3 md:grid-cols-3'>
            <label>
              <input type='radio' id='age' />
              20-24 years
            </label>
            <label>
              <input type='radio' id='age' /> 25-29 years
            </label>
            <label>
              <input type='radio' id='age' /> 30-34 years
            </label>
            <label>
              <input type='radio' id='age' /> 35-49 years
            </label>
            <label>
              <input type='radio' id='age' /> 50-60 years
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='font-bold text-[16px]'>
            3. Your Email Address
          </label>
          <input className='lg:w-[40%] h-11 border rounded-lg px-2' type='email' id='email' placeholder='Enter your email' />
        </div>

        <div>
          <p className='font-bold text-[16px]'>
            5. What is your educational level?
          </p>
          <div className='lg:w-[50%] grid grid-cols-2 gap-y-3 md:grid-cols-3'>
            <label>
              <input type='radio' /> O/L
            </label>
            <label>
              <input type='radio' /> A/L
            </label>
            <label>
              <input type='radio' /> Bachelors
            </label>
            <label>
              <input type='radio' /> Masters
            </label>
            <label>
              <input type='radio' /> Post Graduate
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='department' className='font-bold text-[16px]'>
            6. What is your Department
          </label>
          <input className='lg:w-[40%] h-11 border rounded-lg px-2' type='text' id='department' placeholder='e.g Product Department' />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='JobTitle' className='font-bold text-[16px]'>
            7. What is your Job Title
          </label>
          <div className='lg:w-[50%] grid grid-cols-3 gap-y-5'>
            <label>
              <input className='border' type='radio' name='developer' /> App Developer
            </label>
            <label>
              <input className='border' type='radio' name='developer' /> Web Developer
            </label>
            <label>
              <input className='border' type='radio' name='graphics' /> Graphic Designer
            </label>
            <label>
              <input className='border' type='radio' name='analyst' /> Data / Business Analyst
            </label>
            <label>
              <input className='border' type='radio' name='management' /> Manager
            </label>
            <label>
              <input className='border' type='radio' name='secretariate' /> Secretary
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[16px]'>
            8. What is your Job type?
          </p>
          <div className='md:w-[50%] grid grid-cols-2 gap-y-5 '>
            <label>
              <input type='radio' /> Part-time
            </label>
            <label>
              <input type='radio' /> Full-time
            </label>
            <label>
              <input type='radio' /> Contract
            </label>
            <label>
              <input type='radio' /> Internship
            </label>
          </div>
        </div>

        <div className='flex items-center justify-center lg:items-center lg:justify-start'>
          <button type='submit' className='w-[50%] lg:w-[20%] h-[30px] lg:h-13 border bg-[#ea5535] text-white font-bold text-[16px] rounded-2xl'>
            Submit
          </button>
        </div>
      </form>
      <h2 className='font-bold text-[16px] text-center'>Thank You For Your Response!</h2>
    </div>
  )
}
