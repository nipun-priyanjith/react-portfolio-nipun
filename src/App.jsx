import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from'./components/Contact'


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full"><div className="absolute top-0 z-[-2] h-screen w-screen bg-darkGray"></div></div>
      
      <div className='container mx-auto px-8'>
        <Navbar/>        
        <Hero/>
        <section id="about">  
         <About/>
        </section>
        <Technologies/>
        <section id="projects">
        <Projects/></section>
        <section id="experience">
        <Experience/></section>
        <section id="contact">
        <Contact/></section>
      </div>
    </div>
  )
}

export default App