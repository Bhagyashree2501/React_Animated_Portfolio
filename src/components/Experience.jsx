import React from 'react'
import experience from './data/experience.json'

const Experince = ()=> {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Experience</h1>
        {experience.map((data)=> {
          return (
            <>
            <div key={data.id} className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000">

             <div className="left">
                <img src={`/assets/${data.imageSrc}`} alt=""  />
             </div>

              <div className="right">
                <h2>{data.role}</h2>
                <h4>
                  <span style={{ color: "yellowgreen"}}>{data.startDate} {"-"} {data.endDate}</span>
                   
                </h4>
                <h5 style={{ color:"yellow"}}>{data.experiences}</h5>
              </div>
            </div>
            </>
          )
        })}

      </div>
    </>
  )
}

export default Experince