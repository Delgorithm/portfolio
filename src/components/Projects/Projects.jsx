import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className='h-screen bg-purple-100 p-4'>
        <div className='flex items-center text-2xl font-semibold'>
            <AiOutlineLeft />
            <p>Projets</p>
            <span className='w-5 h-0.5 bg-black -rotate-45 translate-x-2'></span>
            <AiOutlineRight />
        </div>
        <div className='m-4 p-4 rounded-xl shadow-lg text-center '>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-around'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects