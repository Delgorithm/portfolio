import React from 'react'
import BtnGitHubProfil from '../Buttons/BtnGitHubProfil'
import BtnLinkedinProfil from '../Buttons/BtnLinkedinProfil'

const Footer = () => {
  return (
    <div className='bg-gray-800 h-32 p-4 text-white flex justify-around items-center'>
        <p className='text-xs font-semibold'>Copyright 2023. All rights are reserved</p>
        <div>
            <BtnLinkedinProfil />
            <BtnGitHubProfil />
        </div>
    </div>
  )
}

export default Footer