import React from 'react'
import { ThemeProvider } from './components/Navbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BallCursor from './components/BallCursor'

function App() {
  return (
    <ThemeProvider>
      <BallCursor />
      <div className="min-h-screen font-sans">
        <Navbar />

        <main>
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App