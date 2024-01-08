import React from "react";
import Heading from '../components/Heading'
import hero1 from '../assets/hero-img1.png'
import { Link } from 'react-router-dom'
import Buttons from '../components/Buttons'

function HomepageHero() {
  return (
    <section className="homepage-hero">
      <div className="hero">
        <Heading text="Simplifying Life One Task at a Time" />
        <img src={hero1} alt="OrganizeMe hero image" />
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
