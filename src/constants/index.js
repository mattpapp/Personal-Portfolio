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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "IT Sales Representative",
      company_name: "Apple",
      icon: apple,
      iconBg: "#383E56",
      date: "Aug 2022 - Dec 2022",
      points: [
        "Engaged with customers in real-time through live chat to offer product information, resolve inquiries, and facilitate purchases. My role directly influenced successful sales outcomes by ensuring a seamless customer experience.",
        "Maintained a high level of product knowledge and efficiency in responding to customer queries, resulting in increased customer satisfaction and repeat business.",
      ],
    },
    {
      title: "Upskilling Advisor",
      company_name: "Workearly",
      icon: workearly,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Aug 2023",
      points: [
        "Provided personalized guidance and advice to individuals navigating career transitions and professional advancement within the IT field, assisting them in making informed decisions about their upskilling journey. My role involved streamlining career transitions and blends within the IT sector, contributing to the company's growth.",
        "Provided personalized career guidance, including resume and LinkedIn profile optimization, to individuals transitioning within the IT field. This support facilitated successful career advancements and contributed to company growth.",
      ],
    },
    {
      title: "Sales Representative",
      company_name: "Reatcode",
      icon: reatcode,
      iconBg: "#383E56",
      date: "Mar 2023 - Aug 2023",
      points: [
        "Responsible for managing inbound leads, conducting needs assessments, and facilitating sales through a consultative approach within the context of software engineering and data science courses. My efforts directly contributed to revenue growth and fostered positive client relationships, leveraging technical expertise to align client needs with appropriate educational solutions.",
        "Collaborated with cross-functional teams to identify opportunities for product enhancements and customizations tailored to client requirements, ensuring alignment between customer needs and offered solutions.",
      ],
    },
    {
      title: "Student Ambassador",
      company_name: "Faculty of Science and Engineering",
      icon: fse,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Engage with prospective students both online and in-person, articulating the benefits and opportunities offered by the Faculty of Science and Engineering (FSE) and Maastricht University (UM), while addressing any inquiries they may have.",
        "Deliver engaging presentations and tours to showcase the study programs and facilities at FSE, effectively communicating program details, admission criteria, and the university's unique learning environment to potential students and their parents.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AirHopper",
      description:
        "I always enjoyed playing Flappy Bird. So, I developed a Flappy Bird clone in Java inspired by the original game's addictive gameplay. Created from scratch, this clone provides the thrill of the classic game, which was removed from app stores.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: airhopper,
      source_code_link: "https://github.com/mattpapp/AirHopper",
    },
    {
      name: "Drivify",
      description:
        "Currently designing an app that facilitates the discovery and connection with driving schools. This application aims to simplify the process for users by providing a platform to find nearby driving schools, compare services, and schedule lessons.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "flutter",
          color: "green-text-gradient",
        },
      ],
      image: drivify,
      source_code_link: "https://www.figma.com/file/P2WexkVYhT8udbSYOJ9T3L/Driving-School?type=design&node-id=0-1&mode=design&t=2EHT01XO8OKSww7p-0",
    },
    {
      name: "TaskMaster",
      description:
        "Currently designing a task management system aimed at enhancing user productivity. This application focuses on advanced task creation, prioritization, and tracking features. The goal is to provide an intuitive way for users to manage their tasks.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
      ],
      image: taskmaster,
      source_code_link: "https://github.com/",
    },
    {
      name: "Transitor (Academic)",
      description:
        "Currently developing a routing engine to evaluate socio-economic accessibility in Maastricht using public transport data. This includes functionalities for calculating distances, routing with transfer options, and detailed accessibility analysis",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
      ],
      image: transitor,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tetris (Academic)",
      description:
        "Developed a modern version of the classic Tetris game from scratch, focusing on implementing core gameplay mechanics, intuitive user interface, and engaging visual elements. The project aimed to deliver a polished and enjoyable gaming experience.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tetris,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { services, technologies, experiences, projects };