import React from 'react'
import {socials} from '../assets/assets'

const Links = () => {
  return (
    <div className='flex items-center justify-center my-20'>
        <div className='flex flex-col gap-8'>
            {
                socials.map((item, index) => (
                    <a  key={index} href={item.link} target='_blank'>
                         <div  className='custom-shadow px-16 py-3 rounded-md flex gap-4'>
                        <img className='w-6' src={item.icon} alt={item.name} />
                         <p key={index}>{item.name}</p>
                    </div>
                    </a>
                   
                   
                ))
            }
        </div>
      
    </div>
  )
}

export default Links
