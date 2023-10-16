import React from 'react'
import BtnGitHubProfil from '../Buttons/BtnGitHubProfil'
import BtnLinkedinProfil from '../Buttons/BtnLinkedinProfil'
import { HiChevronDown } from 'react-icons/hi2'

const Header = () => {
    return (
        <main>
            <div className='flex flex-col justify-center items-center h-full md:h-full md:pt-20'>
                <picture>
                    <img 
                        src="./img/pp00.jpeg" 
                        alt="" 
                        width={250} 
                        className='xxxsm:w-40 xxsm:w-60 xsm:w-70 sm:w-80 md:w-80 lg:w-96 xxxsm:pt-4 xxsm:pt-10 xsm:pt-10 lg:pt-0'
                    />
                </picture>
                <h1 className='text-3xl text-center font-bold p-2 py-5 xxxsm:text-2xl xsm:text-3xl'>Développeur Front-End React</h1>
                <p className='text-center px-4 xxxsm:text-lg xsm:text-xl leading-9'>
                    Bonjour ! <br/> 
                    Je me présente Adrien Douville, un développeur <mark className='bg-black text-white p-1 rounded-lg font-semibold'>front-end React</mark> se situant vers <span className='underline'>Bordeaux, France.</span>
                </p>
                <div className='pt-5 flex gap-20 '>
                    <BtnLinkedinProfil />
                    <BtnGitHubProfil />
                </div>
                <div className=''>
                    <HiChevronDown className='text-2xl animate-bounce infinite '/>
                </div>
            </div>
        </main>
    )
}

export default Header