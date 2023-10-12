import React from 'react'
import BtnHamburgerMenu from '../Buttons/BtnHamburgerMenu'

const Nav = () => {
  return (
    <main className='font-raleway bg-gray-50 p-4 flex justify-between items-center shadow-lg'>
      <h1 className='font-bold text-xl'>Adrien.D(ev)</h1>
      <div>
        <BtnHamburgerMenu />
      </div>
    </main>
  )
}

export default Nav