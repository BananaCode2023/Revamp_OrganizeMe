import React, { useEffect } from 'react'
import '../css/about.css'
import Headings from '../components/Headings'
import AOS from "aos";
import "aos/dist/aos.css";
import teamImg from '../assets/about-img1.gif'
import ScrollToTop from '../components/ScrollToTop';
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar/>
      <div className='about-page'>
        <div className='heading'>
          <Headings text="Get to Know Us" />
          <Headings text="Discover Our Story and Mission" />
          <h4>Meet our team, the people behind our success. Simplifying lives through our vision for a better future.</h4>
        </div>

        <div className='feature-row' 
        data-aos='fade-up' 
        style={{position: 'relative', zIndex:'-1'}}
        >
          <div className='feature-text'>
            <h5>MEET THE HEART OF OUR ORGANIZATION</h5>
            <h2>Our Dedicated Team</h2>
            <p>OrganizeMe was founded by three students of KodeGo University Of The Philippines</p>
          </div>
          <img src={teamImg} alt="OrganizeMe-feature" />
        </div>

        <div className='quote'>
          <p>
          "Our task manager app is designed to simplify your life by helping you organize your tasks, set priorities, and stay on top of your to-do lists with ease. With user-friendly features and a clean interface, we`re here to make task management a breeze, ensuring you can focus on what matters most in your life.""
          </p>
          <span>
            -OrganizeMe Team
          </span>
        </div>

        <div className='organizeMe-team'>
          <div className='team-member'
          data-aos="fade-up"
          data-aos-duration="500"
          style={{position: 'relative', zIndex:'-1'}}
          >
            <img src={partner3} alt="" />
            <Link to='https://bananacoder.netlify.app/' target='_blank'>
              <h3>Roben Matimtim</h3>
            </Link>
            <p>Recruitment Admin<br/>Full Stack Web Developer</p>
          </div>
          <div className='team-member'
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{position: 'relative', zIndex:'-1'}}
          >
            <img src={partner1} alt="" />
            <Link to='https://bananacoder.netlify.app/' target='_blank'>
              <h3>Peter John Reyes</h3>
            </Link>
            <p>Entrepreneur<br/>Full Stack Web Developer</p>
          </div>
          <div className='team-member'
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{position: 'relative', zIndex:'-1'}}
          >
            <img src={partner2} alt="" />
            <Link to='https://jpdeclaro-dev-portfolio.vercel.app/' target='_blank'>
              <h3>John Patrick DeClaro</h3>
            </Link>
            <p>Teacher<br/>Full Stack Web Developer</p>
          </div>
        </div>
        <ScrollToTop/>
      </div>
      <Footer/>
    </>
  )
}

export default About