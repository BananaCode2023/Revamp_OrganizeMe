import React from 'react'
import '../css/features.css'
import Headings from '../components/Headings'
import FeaturesSection from '../components/Features/FeaturesSection'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <>
      <div className='features-page'>
        <div className='heading'>
          <Headings text="Elevate your Productivity" />
          <h4>Seamless and efficient experience. Here`s how you can make the most out of our website features</h4>
        </div>
        <FeaturesSection/>
        <div id='quote'>
          <p>
          Your path to productivity begins here.<br/>
          With our ToDoList app, follow this simple roadmap:
          </p>
          <p>
          PLAN, DO, ACHIEVE.<br/>
          Stay Organized Effortlessly!
          </p>
          <Link>
            <Buttons 
            buttonType="outlineButton" buttonText="Try Now" 
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Features