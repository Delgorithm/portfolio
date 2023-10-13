import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Techstack from './components/TechStack/Techstack'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Techstack />
      <About />
      <Projects />
      <Contact />
    </div>
  )    
}

export default App
