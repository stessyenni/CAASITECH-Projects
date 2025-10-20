import React from 'react'
// import Logo from '../public/logo.svg'

const Urlfooter = () => {
  return (
    <div className='flex flex-col'>
      <footer className='w-full py-10 flex items-center justify-center text-white border-1 bg-[#232027]'>
        <div className='w-[90%] flex justify-between border-'>
          <h1 className='text-[28px] text-white font-bold'>Shortly</h1>
          <div className='flex items-center gap-20'>
            <div className='flex flex items-center gap-15'>
              <div className='flex flex-col gap-2 text-[18px] font-bold'>
                <h2>Features</h2>
                <nav className='list-none flex flex-col text-[16px] text-[#919193] '>
                  <li>
                    <a href='#'>Link Shortening</a>
                  </li>
                  <li>
                    <a href='#'>Branded Links</a>
                  </li>
                  <li>
                    <a href='#'>Analytics</a>
                  </li>
                </nav>
              </div>
              <div className='flex flex-col gap-2 text-[18px] font-bold'>
                <h2>Resources</h2>
                <nav className='list-none flex flex-col text-[16px] text-[#919193]'>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Developers</a>
                  </li>
                  <li>
                    <a href='#'>Support</a>
                  </li>
                </nav>
              </div>
              <div className='flex flex-col gap-2 text-[18px] font-bold'>
                <h1>Company</h1>
                <nav className='list-none flex flex-col text-[16px] text-[#919193]'>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Our Team</a>
                  </li>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </nav>
              </div>
            </div>
            <div className='flex justify-center items-center gap-8'>
              <img src='/icon-facebook.svg' alt='Facebook' />
              <img src='/icon-twitter.svg' alt='Twitter' />
              <img src='/icon-pinterest.svg' alt='Pinterest' />
              <img src='/icon-instagram.svg' alt='Instagram' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Urlfooter
