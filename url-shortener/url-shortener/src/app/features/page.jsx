import React from 'react'
import UrlMain from './urlmain'
import SearchBar from '@/Components/searchbar'
import UrlCard from '@/Components/urlcard'
import Urlheader from '@/Components/header'

const UrlPage = () => {
  const urlCards = [
    {
      image: '/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      intro: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
    },
    {
      image: '/icon-detailed-records.svg',
      title: 'Detailed Records',
      intro: 'Gain insights in to who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      image: '/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      intro: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ]

  return (
    <div className='w-full pt-10 flex flex-col items-center justify-between gap-15 bg-gray-200'>
      <Urlheader />
      <UrlMain />
      <SearchBar />
      <div className='bg-[#f0f1f6] h-full flex flex-col items-center gap-20'>
        <div className='w-[30%] flex flex-col items-center justify-center'>
          <h1 className='text-[40px] font-bold'>Advanced Statistics</h1>
          <p className='text-[18px] text-center text-gray-500 font-bold'>
            Track how your links are performing accross the web with are advanced statistics dashboard
          </p>
        </div>
        <div className='grid grid-cols-3 gap-10 items-center p-10 border- '>
          {urlCards.map((card, index) => (
             <UrlCard
               key={index}
               image={card.image}
               title={card.title}
               intro={card.intro} />
           ))}
        </div>
        <div className='w-full h-[150px] pb-10 bg-cover bg-center bg-screen bg-[url(/bg-shorten-mobile.svg)]'>
        <div className='flex flex-col items-center pt-5 gap-5'>
          <h1 className='text-[30px] font-bold text-white'>Boost your links today</h1>
          <button className='w-[10%] h-[40px] text-white font-bold bg-[#2cd1d1] border-1 rounded-full'>
            Get Started
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UrlPage
