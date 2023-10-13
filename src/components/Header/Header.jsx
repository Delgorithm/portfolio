import React from 'react'
import BtnGitHubProfil from '../Buttons/BtnGitHubProfil'
import BtnLinkedinProfil from '../Buttons/BtnLinkedinProfil'
import Techstack from '../TechStack/Techstack'
import { HiChevronDown } from 'react-icons/hi2'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Header = () => {
    return (
        <main className='font-raleway'>
            <div className='flex flex-col justify-center items-center pt-4'>
                <picture>
                    <img src="./img/pp00.jpeg" alt="" width={200} />
                </picture>
                <h1 className='text-3xl text-center font-bold p-2 py-5'>Développeur Front-End React</h1>
                <p className='text-center px-6 text-xl leading-9'>
                    Bonjour ! <br/> 
                    Je me présente Adrien Douville, un développeur <mark className='bg-black text-white p-1 rounded-lg font-semibold'>front-end React</mark> se situant vers <span className='underline'>Bordeaux, France.</span>
                </p>
                <div className='pt-5 flex gap-20'>
                    <BtnLinkedinProfil />
                    <BtnGitHubProfil />
                </div>
                <HiChevronDown className='text-2xl animate-bounce infinite'/>
            </div>
        </main>
    )
}

export default Header