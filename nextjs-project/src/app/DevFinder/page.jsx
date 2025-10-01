
import React from 'react'
import DevFinder from './DevFinder'
import SearchBar from '@/components/SearchBar'
// import DevUser from './DevUser'

function DevFinderPage() {
    const FinderCard = [
        {
            image: '/profile2.png',
            title: 'The Octocat',
            Subtitle: '@octocat',
            para: 'This profile has no bio',
        },
    ]
  return (
      <div className='flex flex-col gap-10'>
          {/* <SearchBar /> */}
          <div className='grid grid-cols-1'>
                {
                    FinderCard.map((card, index) => (
                        <DevFinder
                            key={index}
                            image={card.image}
                            title={card.title}
                            Subtitle={card.Subtitle}
                            para={card.para}
                        />
                    ))
                }
          </div>
    </div>
  )
}

export default DevFinderPage
