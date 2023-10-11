import React from 'react'

const Header = () => {
    return (
        <main className='font-raleway h-screen'>
            <div className='flex flex-col justify-center items-center pt-20'>
                <picture>
                    <img src="./img/pp00.jpeg" alt="" width={200} />
                </picture>
                <h1 className='text-3xl text-center font-bold p-2 py-5'>Développeur Front-End React</h1>
                <p className='text-center px-8'>
                    Bonjour et bienvenue! <br/> 
                    Je me présente Adrien Douville, un développeur <mark className='bg-black text-white p-1 rounded-lg font-semibold'>front-end React</mark> se situant vers Bordeaux, France.
                </p>
            </div>
        </main>
    )
}

export default Header