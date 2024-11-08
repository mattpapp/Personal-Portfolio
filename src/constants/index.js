import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  git,
  figma,
  apple,
  reatcode,
  workearly,
  fse,
  java,
  python,
  mysql,
  threejs,
  drivify,
  taskmaster,
  transitor,
  tetris,
  airhopper,
  bayer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "SQL Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Bayer",
    icon: bayer,
    iconBg: "#FFFFFF",
    date: "June 2024 - Present",
    points: [
      "Developing a full-stack project tracker web application for Bayer's internal team using HTML, CSS, JavaScript for the frontend, and Java Spring Boot for the backend.",
      "Redesigned internal OneNote structure, enhancing organization, interconnectivity, and knowledge management.",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Faculty of Science and Engineering",
    icon: fse,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Conducted basic coding presentations for prospective students, covering fundamental programming concepts.",
      "Delivered presentations and tours to showcase study programs and facilities at FSE, effectively communicating admission criteria and program details.",
    ],
  },
  {
    title: "IT Sales Representative",
    company_name: "Reatcode",
    icon: reatcode,
    iconBg: "#383E56",
    date: "Mar 2023 - Aug 2023",
    points: [
      "Managed inbound leads and facilitated sales through a consultative approach, contributing directly to revenue growth.",
      "Collaborated with cross-functional teams to align client needs with educational solutions in software engineering and data science.",
    ],
  },
  {
    title: "Sales Agent",
    company_name: "Apple",
    icon: apple,
    iconBg: "#383E56",
    date: "Aug 2022 - Mar 2023",
    points: [
      "Engaged with customers via live chat to offer product information, resolve inquiries, and facilitate purchases, achieving high customer satisfaction scores.",
      "Provided technical support and troubleshooting for Apple products and services, directly influencing sales outcomes.",
    ],
  },
];

const projects = [
  {
    name: "TaskMaster",
    description:
      "Java-based task management app that optimizes user productivity with task creation, prioritization, and tracking features. Implements reminders, deadlines, and collaboration tools.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "figma", color: "green-text-gradient" },
    ],
    image: taskmaster,
    source_code_link: "https://github.com/",
  },
  {
    name: "Drivify",
    description:
      "Cross-platform mobile app developed in Flutter and Dart to help users discover and connect with nearby driving schools. Features Google Maps API integration and Firebase for real-time data.",
    tags: [
      { name: "figma", color: "blue-text-gradient" },
      { name: "flutter", color: "green-text-gradient" },
    ],
    image: drivify,
    source_code_link:
      "https://www.figma.com/file/P2WexkVYhT8udbSYOJ9T3L/Driving-School?type=design&node-id=0-1&mode=design&t=2EHT01XO8OKSww7p-0",
  },
  {
    name: "Maastricht Map Simulator (Academic)",
    description:
      "Java-based routing engine that calculates distances and travel times using OpenStreetMap and GTFS data. Supports multiple transport modes with offline functionality and high-resolution mapping.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "html", color: "green-text-gradient" },
    ],
    image: transitor,
    source_code_link: "https://github.com/",
  },
  {
    name: "AirHopper",
    description:
      "Flappy Bird-inspired game developed in Java, focusing on core gameplay mechanics, collision detection, and scoring. Adds a modern twist with leaderboards and achievement badges.",
    tags: [{ name: "java", color: "blue-text-gradient" }],
    image: airhopper,
    source_code_link: "https://github.com/mattpapp/AirHopper",
  },
  {
    name: "Tetris (Academic)",
    description:
      "Modern version of Tetris game created in Java, implementing core gameplay mechanics, a user-friendly interface, and engaging visual elements. Features high-score tracking and difficulty levels.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tetris,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };