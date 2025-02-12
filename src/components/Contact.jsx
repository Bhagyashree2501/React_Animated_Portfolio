import React from 'react'
import { FaInstagram } from "react-icons/fa";
//import { FaFacebook } from "react-icons/fa";
//import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
//import { MdWifiCalling3 } from "react-icons/md";
//import { IoHome } from "react-icons/io5";
//import { PiWhatsappLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
        <h1> CONTACT ME </h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000" >

            <a href="https://www.instagram.com" target="" className="items">
            <FaInstagram className="icons"/>
            </a>

            

            

            <a href="https://www.gmail.com" target="" className="items">
            <CgMail className="icons"/>
            </a>

            

            

            

            <a href="https://www.linkedin.com" target="" className="items">
            <FaLinkedinIn className="icons"/>
            </a>

            <a href="https://www.github.com" target="" className="items">
            <FaGithub className="icons"/>
            </a>


        </div>
        
       
    </div>
    </>
    
  )
}

export default Contact