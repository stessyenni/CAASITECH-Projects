'use client';
import React from "react";
import {useState} from "react";

function ExtensionsList(props) {
  const [toggled, setToggled] = useState(false);
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
          <button className='removeBtn'>Remove</button>
          <button className={`toggleBtn ${toggled ? "toggled" : ""}`} onClick={() => setToggled(!toggled)}>
            <div className='flip'></div>
          </button>
      </div>
      </div>

      
  </>
  )
}

export default ExtensionsList;
