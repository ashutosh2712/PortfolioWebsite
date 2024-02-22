import { SiIntel } from "react-icons/si";
import Accen from "./assets/companyData/accenflairImg.png";
const Intel = [];
const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    date: "January 2024 -",
    icon: <img src={Accen} alt="Accen" />,
    location: "Hyderabad, India",
    description: [
      " We work relentlessly towards providing customized, cost-effective, and target-specific solutions to customer businesses from conception to inception and from execution to excellence",
    ],
  },

  {
    id: 2,
    title: "Full Stack Developer Intern",
    date: "July 2022 - June 2023",
    icon: <SiIntel />,
    location: "Bangalore, India",
    description: [
      "We developed a Full-stack application for the Data Center and AI group in a team of 8 members.",
      "It is a Web portal developed using front-end technologies like HTML, CSS, Bootstrap, jinja template, and vanilla JavaScript and back-end technologies like Python Flask, SQLalchemy, and PostgreSQL.",
      "The Portal represents a cross-intel initiative to drive systematic market-important workload orientation into Intel's product planning, development, and delivery.",
      "Influenced 250 enterprise data innovators and doubled Intel’s consumption revenue to 60M US Dollars.",
    ],
  },
];

export default experiences;
