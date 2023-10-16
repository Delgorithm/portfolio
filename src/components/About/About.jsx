import React from 'react'
import DataTechstack from '../data/DataTechstack'

const About = () => {
  return (

    <div className='h-full  flex flex-col pt-10 lg:h-[1200px]'>
    {DataTechstack.map((item, index) => (
      <div 
        key={item.id}
        className='text-center'
      >
        <picture className='flex justify-center p-2'>
          <img src={item.img} alt="" width={300} className='rounded-2xl md:w-[500px] lg:w-[700px]'/>
        </picture>
        <p className='text-2xl font-semibold pt-1 md:text-4xl lg:text-5xl md:p-10'>{item.title}</p>
        <p className='text-xl font-semibold p-2 text-blue-700 lg:text-3xl lg:p-10 m-2'>{item.definition}</p>
        <p className='xxxsm:text-[1em] md:text-xl md:leading-10 lg:text-2xl leading-6 lg:leading-[60px] m-4 px-2 lg:px-20'>
            En tant que développeur frontend <span className='underline font-semibold'>autodidacte</span>, je suis constamment en quête de perfectionnement. <br/>
            Grâce à mes compétences approfondies en <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>HTML</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>CSS</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>JavaScript</span>, <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>React</span> et <span className='underline font-semibold p-0.5 bg-gray-800 rounded-lg text-white'>TailwindCSS</span>, je suis capable de traduire des concepts créatifs en interfaces utilisateur interactives et réactives. <br/>
            Mon engagement envers <span className='underline font-semibold'>l'apprentissage continu</span> me pousse à explorer de nouveaux terrains dans le monde du développement web, et m’a <span className='underline font-semibold'>doté d’une capacité à résoudre des problèmes complexes tout en concevant des solutions innovantes</span>, garantissant ainsi des résultats exceptionnels pour chaque projet auquel je participe.
        </p>
      </div>
      ))}
    </div>
  )
}

export default About