import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import BtnProjectOne from '../Buttons/BtnProjects/BtnProjectOne'
import DataProjects from '../data/DataProjects'

const Projects = () => {
  return (
    <div className=' bg-gray-50 p-4 rounded-xl shadow-lg'>

        <div className='flex items-center text-2xl font-semibold lg:text-4xl lg:p-10'>
            <AiOutlineLeft />
            <p>Projets</p>
            <span className='w-5 h-0.5 bg-black -rotate-45 translate-x-2'></span>
            <AiOutlineRight />
        </div>

        {DataProjects.map((item, index) => (
            <div 
                key={item.id}
                className='m-4 p-4 rounded-xl shadow-lg text-center bg-white'
            >
                <picture>
                    <img src={item.img} alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='pt-10 text-2xl font-semibold md:text-3xl lg:text-4xl'>{item.title}</p>
                <p className='px-5 p-4 md:text-xl lg:text-2xl'>{item.firstDescription}</p>
                <p className='px-5 md:text-xl lg:text-2xl'>{item.secondDescription}</p>
                <div  className='flex justify-center gap-6 pt-4'>
                    <p className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg md:text-xl'>{item.firstTool}</p>
                    <p className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg md:text-xl'>{item.secondTool}</p>
                </div>
                <div className='pt-6'>
                    <BtnProjectOne />
                </div>
            </div>
        ))}  
    </div>
  )
}

export default Projects