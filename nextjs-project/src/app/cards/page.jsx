import React from 'react'
import Card from './card.jsx'

function Cards() {
  return (
     <div className='cards'>
        <Card image={'/Stessy.png'} name="Stessy Enni" intro="I am a masters in ICT student and play video games" />
        <Card image={'/profile2.png'} name="Boomi Anoh" intro="I am an App developer and I love to watch crime movies" />
        <Card image={'/profile3.png'} name="Che Alex" intro="I am an App developer and I love to watch interesting movies" />
        <Card image={'/profile4.jpeg'} name="Cool Derrick" intro="I am a Web developer and I love to watch love movies" />
    </div>
  )
}

export default Cards
