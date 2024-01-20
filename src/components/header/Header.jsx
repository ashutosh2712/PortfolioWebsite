import React from 'react'
import './header.css'
import CTA from './CTA'
import myImage from '../../assets/myImageFinal.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Ashutosh Kumar Roy</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="myImage">
          <img src={myImage} alt="" className='firstImage'/>
        </div>
        <a href="#contact" className="scrollDown">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
