import React from 'react'

const About = () => {
  return (
    <div className='h-screen bg-white flex flex-col pt-4'>
        <picture className='flex justify-center p-2'>
            <img src="./img/img001.jpg" alt="" width={300} className='rounded-2xl'/>
        </picture>
        <div className='flex flex-col items-center text-center px-6'>
            <p className='text-2xl font-semibold pt-1'>À propos de moi</p>
            <p className='text-xl font-semibold p-2 text-blue-700'>Un développeur front-end autodidacte qui cherche à développer davantage ses compétences</p>
            <p className='text-sm px-3 leading-6'>
                En tant que développeur frontend <span className='underline font-semibold'>autodidacte</span>, je suis constamment en quête de perfectionnement. <br/>
                Grâce à mes compétences approfondies en <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>HTML</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>CSS</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>JavaScript</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>React</span> et <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>Tailwind CSS</span>, je suis capable de traduire des concepts créatifs en interfaces utilisateur interactives et réactives. <br/>
                Mon engagement envers <span className='underline font-semibold'>l'apprentissage continu</span> me pousse à explorer de nouveaux terrains dans le monde du développement web, et m’a <span className='underline font-semibold'>doté d’une capacité à résoudre des problèmes complexes tout en concevant des solutions innovantes</span>, garantissant ainsi des résultats exceptionnels pour chaque projet auquel je participe.
            </p>
        </div>
    </div>
  )
}

export default About