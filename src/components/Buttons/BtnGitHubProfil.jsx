import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const BtnGitHubProfil = () => {

  const githubUrl = 'https://github.com/Delgorithm';

  return (
    <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
      <button className='transition duration-200 ease-in-out hover:scale-105'>
          <AiFillGithub className='text-5xl'/>
      </button>
    </a>
  )
}

export default BtnGitHubProfil