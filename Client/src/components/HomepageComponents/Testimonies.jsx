import TestimonySlider from './TestimonySlider'
import partnerBrand1 from '../../assets/partnerBrand1.png'
import partnerBrand2 from '../../assets/partnerBrand2.png'
import partnerBrand3 from '../../assets/partnerBrand3.png'
import partnerBrand4 from '../../assets/partnerBrand4.png'
import partnerBrand5 from '../../assets/partnerBrand5.png'


function Testimonies() {
  return (
    <div 
    className='testimonies' 
    >
      <h2>
      Loved by thousands of users<br/>
      All over the world
      </h2>

      <TestimonySlider/>

      <div className='container'>
        <div className='partner-brands'>
          <h3>Featured in:</h3>
          <img src={partnerBrand1} alt="" />
          <img src={partnerBrand2} alt="" />
          <img src={partnerBrand3} alt="" />
          <img src={partnerBrand4} alt="" />
          <img src={partnerBrand5} alt="" />
        </div>
      </div>

      </div>
  )
}

export default Testimonies