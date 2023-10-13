import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import BtnProjectOne from '../Buttons/BtnProjects/BtnProjectOne'

const Projects = () => {
  return (
    <div className=' bg-gray-50 p-4 rounded-xl shadow-lg'>

        <div className='flex items-center text-2xl font-semibold'>
            <AiOutlineLeft />
            <p>Projets</p>
            <span className='w-5 h-0.5 bg-black -rotate-45 translate-x-2'></span>
            <AiOutlineRight />
        </div>

        {/* Project n 1 */}
        <div className='m-4 p-4 rounded-xl shadow-lg text-center bg-white '>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-center gap-6'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
            <div className='pt-6'>
                <BtnProjectOne />
            </div>
        </div>

        {/* Project n 2 */}
        <div className='m-4 p-4 rounded-xl shadow-lg text-center bg-white'>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-center gap-6'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
            <div className='pt-6'>
                <BtnProjectOne />
            </div>
        </div>

        {/* Project n 3 */}
        <div className='m-4 p-4 rounded-xl shadow-lg text-center bg-white'>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-center gap-6'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
            <div className='pt-6'>
                <BtnProjectOne />
            </div>
        </div>

        {/* Project n 4 */}
        <div className='m-4 p-4 rounded-xl shadow-lg text-center bg-white'>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-center gap-6'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
            <div className='pt-6'>
                <BtnProjectOne />
            </div>
        </div>

        {/* Project n 5 */}
        <div className='m-4 p-4 rounded-xl shadow-lg text-center bg-white'>
            <div>
                <picture>
                    <img src="./img/img001.jpg" alt="" className='rounded-xl shadow-lg' />
                </picture>
                <p className='p-2 text-xl font-semibold'>Clone UberEats</p>
                <p className='px-5 py-2'>Un clone de l'application/site web Uber Eats qui permet à l'utilisateur de commander ses plats parmis un éventail choisis. <br/>Il peut sélectionner le restaurant, le(s) produit(s), acheter, ajouter une destination, se connecter.</p>
                <p className='flex justify-center gap-6'>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>React</span>
                    <span className='font-semibold p-1 border border-black bg-gray-100 shadow-sm rounded-lg'>TailwindCSS</span>
                </p>
            </div>
            <div className='pt-6'>
                <BtnProjectOne />
            </div>
        </div>        
    </div>
  )
}

export default Projects