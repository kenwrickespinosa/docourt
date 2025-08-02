import { useRef } from 'react'
import Navbar from '../components/Navbar'

function LandingPage() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Navbar scrollToHero={scrollToHero} scrollToAbout={scrollToAbout} />
      <section ref={heroRef} className="h-screen">
        <h1>Welcome to Docourt</h1>
        <p>Your place for Legal Case and Evidence Tracker Management</p>
      </section>
      <section ref={aboutRef} className="h-screen">
        <h1>About Page</h1>
      </section>
      <section>
        <h1>Contacts Page</h1>
      </section>
    </div>
  )
}

export default LandingPage