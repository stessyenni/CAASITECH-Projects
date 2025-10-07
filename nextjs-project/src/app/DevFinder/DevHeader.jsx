import React from 'react'
import {IoIosSunny} from "react-icons/io";

const DevHeader = () => {
  return (
              <div className='min-w-[60%] min-w-[70%] h-[50px] text-white flex justify-between'>
                  <h4 className=' font-bold'>devfinder</h4>
                  <h4 className='flex gap-4'>LIGHT {<IoIosSunny />}</h4>
              </div>
    )
}

export default DevHeader
