import React, { useEffect } from "react";
import Heading from '../Headings'
import hero1 from '../../assets/hero-img1.png'
import { Link } from 'react-router-dom'
import Buttons from '../Buttons'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageHero() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="homepage-hero">
      <div className="hero">
        <Heading text="Simplifying Life One Task at a Time" />
        <img src={hero1} alt="OrganizeMe hero image" 
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        />
        <h4>
          Start your journey on having a simple, easy, and organized life.{" "}
          <br />
          Organize, prioritize, and achieve more every day.
        </h4>
        <div className="hero-btns">
          <Link>
            <Buttons buttonType="filledButton" buttonText="Get Started" />
          </Link>
          <Link>
            <Buttons buttonType="outlineButton" buttonText="Explore" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;
