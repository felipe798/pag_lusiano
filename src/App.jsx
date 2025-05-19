import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <main>
        <HeroBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App