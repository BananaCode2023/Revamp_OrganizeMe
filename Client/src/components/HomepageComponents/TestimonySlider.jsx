import testimonyDatas from '../../datas/testimonies'

function TestimonySlider() {

  return (
    <div className='testimony-slider'>

        {testimonyDatas.map((data, index)=> (
          <div key={index} className='testimony'>
              <div className='rating'>
                {data.rating}
              </div>
              <p>
                {data.comment}
              </p>
              <h5>
                - {data.name}
              </h5>
          </div>
        ) )}
        {testimonyDatas.map((data, index)=> (
          <div key={index} className='testimony'>
              <div className='rating'>
                {data.rating}
              </div>
              <p>
                {data.comment}
              </p>
              <h5>
                - {data.name}
              </h5>
          </div>
        ) )}
    </div>
  )
}

export default TestimonySlider