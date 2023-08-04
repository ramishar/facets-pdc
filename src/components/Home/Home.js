import React from 'react'
import Navbar from '../Home-components/Navbar'
import HeroSection from '../Home-components/HeroSection'
import Footer from '../Home-components/Footer'
import "./Home.css"
import Contact from '../Home-components/Contact'
import About from '../Home-components/About'
import Programs from '../Home-components/Programs'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Programs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
