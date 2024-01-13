import React from 'react'
import featureDatas from '../../datas/features.js'
import { TbCheckbox } from "react-icons/tb";

function FeaturesSection() {
  return (
    <section>
      {featureDatas.map((data,index)=> (
        <div key={index} className='feature-row'>
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