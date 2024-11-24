import { SiIntel } from "react-icons/si";
import ethan from "./assets/companyData/ethanai.png";
import Accen from "./assets/companyData/accenflairImg.png";
import yene from "./assets/companyData/yene.jpg";
const Intel = [];
const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    date: "August 2024 - ",
    icon: <img src={ethan} alt="Accen" />,
    location: "Bangalore, India",
    description: [
      "As a Full Stack Developer, I led the integration of a project from another company being merged into ours, developing the (LLD) to integrate their codebase into our environment. The project involved migrating two primary applications—one built with ASP.NET and SQL Server, and the other with Flask and MySQL—to our stack, which includes Next.js for the frontend and Django + FastAPI with PostgreSQL for the backend. I handled database migration, server-side deployment in GCP (using Windows and Debian VMs with Cloud SQL), and domain mapping via AWS Route 53. Additionally, I redesigned over 100 APIs, integrated their code into our system, and delivered the project within tight deadlines.",
    ],
  },

  {
    id: 2,
    title: "Full Stack Developer",
    date: "January 2024 - August 2024",
    icon: <img src={Accen} alt="Accen" />,
    location: "Hyderabad, India",
    description: [
      "As a Full Stack Developer, spearheaded the integration of Kafka, Twilio, Onsignals, Elasticsearch, and Kibana into SaaS applications, enhancing functionality and scalability. Took ownership of the notification system by implementing email, SMS, and WhatsApp notifications, and developed comprehensive reporting features and streamlined admin interfaces.",
      "Leveraged React with Redux to create intuitive and responsive user interfaces, optimizing user experience and engagement. Implemented Stripe payment integration and designed GraphQL endpoints for the admin dashboard, ensuring seamless payment processing and efficient data retrieval. Utilized gRPC for synchronous communication between microservices and successfully integrated Hubrise API, showcasing proficiency in full-stack development.",
    ],
  },

  {
    id: 3,
    title: "Assistant Professor",
    date: "August 2023- November 2023",
    icon: <img src={yene} alt="Accen" />,
    location: "Bangalore, India",
    description: [
      "I worked as an Assistant Professor (Grade 1), teaching Computer Science graduates courses on programming, data structures, and problem-solving.",
    ],
  },

  {
    id: 4,
    title: "Full Stack Developer Intern",
    date: "July 2022 - June 2023",
    icon: <SiIntel />,
    location: "Bangalore, India",
    description: [
      "I developed a Full-stack Dashboard application for the Data Center and AI group as part of a team of 8 members.This web portal was created using front-end technologies like HTML, CSS, Bootstrap, and vanilla JavaScript, and back-end technologies like Python Flask, SQLAlchemy, and PostgreSQL. The portal represents a cross-Intel initiative to drive systematic, market-important workload orientation into Intel’s product planning, development, and delivery.",
      "As part of this project, I worked on benchmarking the performance of software execution on Intel chips and its competitors. I implemented filtering features based on datetime and other fields, populated tables using ag-Grid, and created benchmarking graphs using Highcharts.",
    ],
  },
];

export default experiences;
