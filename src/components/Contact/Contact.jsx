import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({name: '', email: '', message: ''});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
  }

  return (
    <form 
      method='post'
      onSubmit={handleSubmit}
      className='flex flex-col p-4 rounded-xl shadow-lg'>
        <p className='text-2xl font-semibold'>Me contacter</p>
        <input 
          disabled
          type="text" 
          name='name' 
          id='' 
          placeholder='John Doe'
          onChange={handleChange}
          value={data.name}
          className='my-2 p-2 border-2 bg-slate-50 focus:outline-blue-400'
        />
        <input 
          disabled
          type="email" 
          name='email' 
          id='' 
          placeholder='example@gmail.com'
          onChange={handleChange}
          value={data.email}
          className='my-2 p-2 border-2 bg-slate-50 focus:outline-blue-400'
        />
        <textarea 
          disabled
          name="message" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder='Votre demande...'
          onChange={handleChange}
          value={data.message}
          className='my-2 p-2 border-2 bg-slate-50 focus:outline-blue-400'
        />
        <div className='flex justify-center'>
          <button 
            type='submit'
            className='bg-blue-400 rounded-lg p-1 active:opacity-70 w-52'
          >
            Envoyer
          </button>
        </div>
    </form>
  )
}

export default Contact