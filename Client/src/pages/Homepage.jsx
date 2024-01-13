import React from 'react'
import '../css/homepage.css'
import HomepageHero from '../components/HomepageComponents/HomepageHero'
import Testimonies from '../components/HomepageComponents/Testimonies'
import Explore from '../components/HomepageComponents/Explore'

function Homepage() {
  return (
    <>
      <HomepageHero/>
      <Testimonies/>
      <Explore/>
    </>
  )
}

export default Homepage