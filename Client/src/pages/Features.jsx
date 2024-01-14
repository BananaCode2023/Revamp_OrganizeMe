import React, { useEffect } from 'react'
import '../css/features.css'
import Headings from '../components/Headings'
import FeaturesSection from '../components/FeaturesComponents/FeaturesSection'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Features() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar/>
      <div className='features-page'>
        <div className='heading'>
          <Headings text="Elevate your Productivity" />
          <h4>Seamless and efficient experience. Here`s how you can make the most out of our website features.</h4>
        </div>
        <FeaturesSection/>
        <div id='quote'>
          <p>
          Your path to productivity begins here.<br/>
          With our ToDoList app, follow this simple roadmap:
          </p>
          <p data-aos='fade-up'>
          PLAN, DO, ACHIEVE.<br/>
          Stay Organized Effortlessly!
          </p>
          <Link data-aos='fade'>
            <Buttons 
            buttonType="outlineButton" buttonText="Let's Do This!" 
            />
          </Link>
        </div>
      </div>
      <ScrollToTop/>
      <Footer/>
    </>
  )
}

export default Features