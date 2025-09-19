import React from 'react'

function ExtensionsList(props) {
  return (
    <>
      <div className='extenCard'>
        <div className='cards'>
          <img className='cards-image' src={props.image} alt="Profile Picture" />
          
        <div className='cards-text'>
          <h2 className='cards-title'>{props.title}</h2>
          <p className='cards-para'>{props.intro}</p>
        </div>
        </div>

        <div className='bottomBtns'>
          <button>Remove</button>
          <button src='' ></button>
      </div>
      </div>

      
  </>
  )
}

export default ExtensionsList
