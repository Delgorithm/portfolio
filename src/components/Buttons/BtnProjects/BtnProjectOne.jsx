import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi'

const BtnProjectOne = () => {

    const code = "https://github.com/Delgorithm/react-ubereats-clone";
    const liveDemo = "https://react-ubereats-clone.vercel.app/"

    return (
        <div className='flex justify-around'>
            <div>
                <a 
                    href={code} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='flex items-center gap-2 p-2 transition duration-200 ease-in-out hover:scale-105'
                >
                    <p className='md:text-2xl lg:text-3xl'>Code</p>
                    <button>
                        <FiGithub className='text-2xl md:text-3xl lg:text-4xl'/>
                    </button>
                </a>
            </div>
            <div>
                <a 
                    href={liveDemo} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='flex items-center gap-2 p-2 transition duration-200 ease-in-out hover:scale-105'
                >
                    <p className='md:text-2xl lg:text-3xl'>Live Demo</p>
                    <button>
                        <BiLinkExternal className='text-2xl md:text-3xl lg:text-4xl'/>
                    </button>
                </a>
            </div>
        </div>
        
    )
}

export default BtnProjectOne