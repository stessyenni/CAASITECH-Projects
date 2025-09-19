import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img className='card-image' src={props.image} alt="Profile Picture"/>
      <h2 className='card-title'>{props.name}</h2>
      <p className='card-text'>{props.intro}</p>
    </div>
  )
}

export default Card
