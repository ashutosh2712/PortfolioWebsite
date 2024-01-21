import React from "react";
import "./skill.css";

import { FaCircleCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";

// programing languges
import python from "../../assets/python.png";
import Cplus from "../../assets/C++.png";
import C from "../../assets/C.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";

//Web Development
//FrontEnd
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import html from "../../assets/html-5.png";
import javaScript from "../../assets/java-script.png";
import jinja2 from "../../assets/jinja2.png";
import JQuery from "../../assets/JQuery.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
//backend
import Flask from "../../assets/Flask.png";
import django from "../../assets/django.png";
import Firebase from "../../assets/Firebase.png";
//database
import sqlite from "../../assets/sqlite.png";
import sqalchemy from "../../assets/sqalchemy.png";
import mysql from "../../assets/mysql.png";
import postgresql from "../../assets/postgresql.png";

//tools
import Git from "../../assets/Git.png";
import docker from "../../assets/docker.png";
import linux from "../../assets/linux.png";
import API from "../../assets/API.png";
import postman from "../../assets/postman.png";
import jenkins from "../../assets/jenkins.png";
import Vscode from "../../assets/Vscode.png";
import intellij from "../../assets/intellij.png";

const Skill = () => {
  return (
    <section id="skill">
      <h5>Relevent Skills</h5>
      <h2>Skills</h2>
      <div className="container skillContainer">
        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <FaLaptopCode className="headIcon" />
              <h3>Programming languages</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <img src={python} alt="python" className="skillImg" />
              <p>Python</p>
            </li>
            <li>
              <img src={Cplus} alt="c++" className="skillImg" />
              <p>C++</p>
            </li>
            <li>
              <img src={java} alt="java" className="skillImg" />
              <p>Java</p>
            </li>
            <li>
              <img src={C} alt="c" className="skillImg" />
              <p>C</p>
            </li>
            <li>
              <img src={sql} alt="sql" className="skillImg" />
              <p>SQL</p>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <CgWebsite className="headIcon" />
              <h3>Web Development</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Frontend:</h4>
              </div>

              <ul className="stackList">
                <li>
                  <img src={html} alt="html" className="skillImg" />
                  <p>HTML</p>
                </li>
                <li>
                  <img src={css} alt="css" className="skillImg" />
                  <p>CSS</p>
                </li>
                <li>
                  <img src={bootstrap} alt="bootstrap" className="skillImg" />
                  <p>Bootstrap</p>
                </li>
                <li>
                  <img src={jinja2} alt="jinja2" className="skillImg" />
                  <p>Jinja2</p>
                </li>
                <li>
                  <img src={JQuery} alt="JQuery" className="skillImg" />
                  <p>JQuery</p>
                </li>
                <li>
                  <img src={javaScript} alt="javascript" className="skillImg" />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src={typescript} alt="typescript" className="skillImg" />
                  <p>TypeScript</p>
                </li>
                <li>
                  <img src={react} alt="react" className="skillImg" />
                  <p>React</p>
                </li>
                <li>
                  <img src={redux} alt="redux" className="skillImg" />
                  <p>Redux</p>
                </li>
              </ul>
            </li>

            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Backend:</h4>
              </div>

              <ul className="stackList">
                <li>
                  <img src={Flask} alt="flask" className="skillImg" />
                  <p>Flask</p>
                </li>
                <li>
                  <img src={django} alt="django" className="skillImg" />
                  <p>Django</p>
                </li>
                <li>
                  <img src={Firebase} alt="firebase" className="skillImg" />
                  <p>Firebase</p>
                </li>
              </ul>
            </li>
            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Database:</h4>
              </div>
              <ul className="stackList">
                <li>
                  <img src={sqalchemy} alt="sqalchemy" className="skillImg" />
                  <p>Sqalchemy</p>
                </li>
                <li>
                  <img src={sqlite} alt="sqlite" className="skillImg" />
                  <p>Sqlite</p>
                </li>
                <li>
                  <img src={mysql} alt="mysql" className="skillImg" />
                  <p>MySQL</p>
                </li>
                <li>
                  <img src={postgresql} alt="postgresql" className="skillImg" />
                  <p>Postgresql</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <FaTools className="headIcon" />
              <h3>Tools</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <img src={Git} alt="git" className="skillImg" />
              <p>Git</p>
            </li>
            <li>
              <img src={docker} alt="docker" className="skillImg" />
              <p>Docker</p>
            </li>
            <li>
              <img src={linux} alt="linux" className="skillImg" />
              <p>linux</p>
            </li>
            <li>
              <img src={API} alt="api" className="skillImg" />
              <p>REST APIs</p>
            </li>
            <li>
              <img src={jenkins} alt="jenkins" className="skillImg" />
              <p>Jenkins</p>
            </li>
            <li>
              <img src={Vscode} alt="vscode" className="skillImg" />
              <p>Vscode</p>
            </li>
            <li>
              <img src={intellij} alt="intellij" className="skillImg" />
              <p>Intellij</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skill;
