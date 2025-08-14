import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import News from '../components/sections/News'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <About />
      <News />
      <Contact />
    </div>
  )
}

export default Home