import React, { useEffect } from 'react'
import featureDatas from '../../datas/features.js'
import { TbCheckbox } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

function FeaturesSection() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section>
      {featureDatas.map((data,index)=> (
        <div key={index} className='feature-row' data-aos='fade-up' 
        style={{position: 'relative', zIndex:'-1'}}>
          <div className='feature-text'>
            <h5><TbCheckbox/>{data.feature}</h5>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
          <img src={data.image} alt="OrganizeMe-feature" />
        </div>
      ))}
    </section>
  )
}

export default FeaturesSection