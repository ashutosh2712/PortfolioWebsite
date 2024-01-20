import React from 'react'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className='headerSocials'>
      <a href="https://www.linkedin.com/in/ashutosh-kumar-roy-8577a81b8/" target='_blank'><RiLinkedinBoxFill /></a>
      <a href="https://github.com/ashutosh2712" target='_blank'><SiGithub /></a>
      <a href="https://www.codechef.com/users/ashutosh2712" target='_blank'><SiCodechef /></a>
    </div>
  )
}

export default HeaderSocial
