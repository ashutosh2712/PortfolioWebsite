import GameHub from "./assets/projectFiles/GameHub.png";
import NoteApp from "./assets/projectFiles/NoteApp.png";
import QuoraClone from "./assets/projectFiles/QuoraCloneRegister.png";
import DiaryMainPage from "./assets/projectFiles/DiaryMainPage.png";
import ChatAppThumb from "./assets/projectFiles/ChatAppThumb.png";
import EcommerceFront from "./assets/projectFiles/EcommerceFront.png";

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
import jinja2 from "./assets/jinja2.png";

const projects = [
  {
    id: 1,
    image: ChatAppThumb,
    title: "LIVE ChatApp",
    stacks: [html, css, javaScript, react, Firebase],
    github: "https://github.com/ashutosh2712/ChatApp-LIVE",
    demo: "https://lambent-trifle-6c0ed4.netlify.app/",
  },

  {
    id: 2,
    image: QuoraClone,
    title: "Quora Clone",
    stacks: [html, css, javaScript, python, django, postgresql],
    github: "https://github.com/ashutosh2712/Quera-clone",
    demo: "https://queraclone.onrender.com/",
  },

  {
    id: 3,
    image: GameHub,
    title: "GameHub",
    stacks: [html, css, typescript, react],
    github: "https://github.com/ashutosh2712/game-hub",
    demo: "https://game-hub-zeta-blue.vercel.app/",
  },

  {
    id: 4,
    image: EcommerceFront,
    title: "ClickShop",
    stacks: [html, css, javaScript, react, redux, python, django],
    github: "https://github.com/ashutosh2712/E-commerce-frontend",
    demo: "",
  },

  {
    id: 5,
    image: DiaryMainPage,
    title: "Secret Diary",
    stacks: [html, css, javaScript, react, python, django],
    github: "https://github.com/ashutosh2712/Diary-frontend",
    demo: "",
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
