import React from 'react'

function Navbar() {
  return (
    <>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000"
    >
        <div className="left nav_items">PORTFOLIO</div>
        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#experince" className="nav_items">Experince</a>
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
        

    </div>
    </>
  )
}

export default Navbar