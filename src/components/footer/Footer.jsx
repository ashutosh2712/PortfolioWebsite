import React from "react";
import "./footer.css";

import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footerLogo">
        Ashutosh
      </a>
      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#experince">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footerSocials">
        <a href="https://www.linkedin.com/in/ashutosh-kumar-roy-8577a81b8/">
          <RiLinkedinBoxFill />
        </a>
        <a href="https://github.com/ashutosh2712">
          <SiGithub />
        </a>
        <a href="https://www.codechef.com/users/ashutosh2712">
          <SiCodechef />
        </a>
      </div>
      <div className="footerCopyright">
        <small>copyright &copy;Ashutosh kumar Roy.All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
