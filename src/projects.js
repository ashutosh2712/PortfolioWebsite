import GameHub from "./assets/projectFiles/GameHub.png";
import NoteApp from "./assets/projectFiles/NoteApp.png";
import QuoraClone from "./assets/projectFiles/QuoraCloneRegister.png";
import DiaryMainPage from "./assets/projectFiles/DiaryMainPage.png";
import ChatAppThumb from "./assets/projectFiles/ChatAppThumb.png";
import EcommerceFront from "./assets/projectFiles/EcommerceFront.png";
import Restrurant from "./assets/projectFiles/restrurant.png";
import status from "./assets/projectFiles/statusApp.png";
import vehcile from "./assets/projectFiles/vehcile.png";
//stacks
import python from "./assets/python.png";
import css from "./assets/css.png";
import html from "./assets/html-5.png";
import javaScript from "./assets/java-script.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import typescript from "./assets/typescript.png";
import django from "./assets/django.png";
import Firebase from "./assets/Firebase.png";
import postgresql from "./assets/postgresql.png";

import nextjs from "./assets/nextjs.png";
import tailwind from "./assets/tailwind.png";
import docker from "./assets/docker.png";

const projects = [
  {
    id: 1,
    image: Restrurant,
    title: "Delizioso",
    stacks: [nextjs, tailwind, docker, postgresql],
    github: "https://github.com/ashutosh2712/Restrurant-App",
    demo: "https://restrurant.live-projects-ashutosh.com/",
  },
  {
    id: 2,
    image: EcommerceFront,
    title: "ClickShop",
    stacks: [html, css, javaScript, react, redux, python, django],
    github: "https://github.com/ashutosh2712/E-Commerce-App",
    demo: "https://clickshop-a7aac0834ac0.herokuapp.com/",
  },
  {
    id: 3,
    image: status,
    title: "Status Mang App",
    stacks: [tailwind, css, react, django, postgresql],
    github: "https://github.com/ashutosh2712/StatusApp",
    demo: "https://lambent-trifle-6c0ed4.netlify.app/",
  },

  {
    id: 4,
    image: vehcile,
    title: "Vehicle Mang System",
    stacks: [html, css, django, postgresql],
    github: "https://github.com/ashutosh2712/VehicleServiceManagementSystem",
    demo: "",
  },

  {
    id: 5,
    image: GameHub,
    title: "GameHub",
    stacks: [html, css, typescript, react],
    github: "https://github.com/ashutosh2712/game-hub",
    demo: "https://game-hub-zeta-blue.vercel.app/",
  },

  {
    id: 6,
    image: NoteApp,
    title: "NoteApp",
    stacks: [html, css, javaScript, react, python, django],
    github: "https://github.com/ashutosh2712/NoteApp",
    demo: "",
  },
];

export default projects;
