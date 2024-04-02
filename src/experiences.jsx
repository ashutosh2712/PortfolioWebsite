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
      "As a Fullstack Developer, I contribute to the development of SaaS applications tailored for our clients. My role encompasses a wide array of responsibilities spanning backend development, frontend design, and system integration.",
      "Technology Integration: Spearheaded the integration of Kafka, Twilio, Onsignals, Elasticsearch, and Kibana into our SaaS applications, enhancing functionality and scalability.",
      "Backend Development: Designed and implemented backend systems using Python Django, ensuring robustness, security, and efficiency in data processing and management. Integrated Stripe payment gateway, facilitating secure and seamless transactions for users.",
      "Frontend Development: Leveraged React with Redux to develop intuitive and responsive user interfaces, optimizing user experience and engagement.",
      "Notification System Ownership: Took ownership of the notification system, implementing email, SMS, and WhatsApp notifications to keep users informed and engaged.",
      "Reports and Admin Interfaces: Developed comprehensive reporting features and streamlined admin interfaces, empowering clients with actionable insights and efficient management tools.",
      " API Development with GraphQL: Built API endpoints using GraphQL, enabling flexible and efficient data querying and manipulation for both frontend and backend systems.",
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
