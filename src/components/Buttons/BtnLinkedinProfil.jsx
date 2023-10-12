import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';

const BtnLinkedinProfil = () => {

  const linkedinUrl = 'https://www.linkedin.com/in/adrien-douville-243b75214/';

  return (
    <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'> 
      <button className='transition duration-200 ease-in-out hover:scale-105'>
          <AiFillLinkedin className='text-5xl'/>
      </button>
    </a>
  )
}

export default BtnLinkedinProfil