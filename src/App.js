import React from 'react'
import './App.css'
import About from './components/About'
// import Coding from './components/Coding'
import Connect from './components/Connect'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <>
        <main className="">
        <Menu />
        <Hero />
        <Projects />
        <Skills />
        <About />
        {/* <Coding /> */}
        <Connect />
      </main>
    </>
  );
}

export default App;
