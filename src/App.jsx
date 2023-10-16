import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Techstack from './components/TechStack/Techstack'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='font-raleway'>
      <Nav />
      <Header />
      <Techstack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )    
}

export default App
