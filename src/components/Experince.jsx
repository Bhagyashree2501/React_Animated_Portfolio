import React from 'react'
import experince from './data/experince.json'

const Experince = ()=> {
  return (
    <>
      <div className="container ex" id="experince">
        <h1>Experince</h1>
        {experince.map((data)=> {
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
                <h5 style={{ color:"yellow"}}>{data.experinces}</h5>
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