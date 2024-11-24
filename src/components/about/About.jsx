import React, { useState } from "react";
import "./about.css";
import Me from "../../assets/myProfile.png";
import { LuAward } from "react-icons/lu";
import { PiDesktopTower } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const About = () => {
  const [activeNav, setActiveNav] = useState("#about");
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <LuAward className="aboutIcon" />

              <h5>Experience</h5>
              <small>2.5+ Years Working as Full Stack Developer</small>
            </article>

            <article className="aboutCard">
              <PiDesktopTower className="aboutIcon" />

              <h5>Projects</h5>
              <small>15+ Company & Personal Projects</small>
            </article>

            <article className="aboutCard">
              <FaMoneyBillTrendUp className="aboutIcon" />

              <h5>Profit</h5>
              <small>
                {" "}
                Influenced 250 enterprise data innovators and doubled Intel's
                consumption revenue to 60M US Dollars.
              </small>
            </article>
          </div>
          <p>
            Greetings! I'm Ashutosh. I hold a master's degree in Computer
            Science from the National Institute of Technology (NIT), Hamirpur. I
            worked as a Full Stack Developer for more than 3years in both
            startups and MNCs. Additionally, I have completed numerous Full
            Stack personal projects, each accompanied by its Git Repository. My
            projects are hosted LIVE as well. I also manage a YouTube channel
            where I have a playlist dedicated to designing Full Stack projects
            from scratch through live streams. Another playlist on my channel
            provides guidance on efficiently solving Data Structures and
            Algorithms (DSA) problems.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setActiveNav("#contact")}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
