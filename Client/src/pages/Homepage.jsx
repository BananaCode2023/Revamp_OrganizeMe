import React from 'react'
import '../css/homepage.css'
import HomepageHero from '../components/HomepageComponents/HomepageHero'
import Testimonies from '../components/HomepageComponents/Testimonies'
import Explore from '../components/HomepageComponents/Explore'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
      <Navbar/>
      <HomepageHero/>
      <Testimonies/>
      <Explore/>
      <ScrollToTop/>
      <Footer/>
    </>
  )
}

export default Homepage