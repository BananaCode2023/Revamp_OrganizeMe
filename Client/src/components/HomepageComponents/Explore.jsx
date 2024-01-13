import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import explore1 from '../../assets/explore1.png'
import explore2 from '../../assets/explore2.png'

function Explore() {

  return (
    <section 
    className='explore'
    data-aos="flip-up"
    >
      <img src={explore1} alt="" className='world-top'/>
      <h3>
        Unlock more possibilities! Dive into our features now. <Link>Click here to explore.</Link>
      </h3>
      <img src={explore2} alt="" className='world-bottom'/>
    </section>
  )
}

export default Explore