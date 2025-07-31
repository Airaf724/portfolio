// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import shadcn from "./assets/tech_logo/shadcn-ui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import react_query from "./assets/tech_logo/react_query.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import sahyadri_software from "./assets/company_logo/sahyadri.jpeg";
import aicte from "./assets/company_logo/aicte_icon.jpeg";

// Education Section Logo's
import i2it from "./assets/education_logo/i2it.png";
import marwadi from "./assets/education_logo/marwadi.jpeg";
import shahu from "./assets/education_logo/shahu.jpeg";

// Project Section Logo's
import ecommerce from "./assets/work_logo/ecommerce.jpg";
import eventio from "./assets/work_logo/eventio.jpg";
import hoobank from "./assets/work_logo/hoobank.jpg";
import prepwise from "./assets/work_logo/prepwise.jpg";
import shopeasy from "./assets/work_logo/shopeasy.jpg";
import snapdragon from "./assets/work_logo/snapdragon.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Shadcn", logo: shadcn },
      { name: "React Query", logo: react_query },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: sahyadri_software,
    role: "Software Developer",
    company: "Sahyadri Software",
    date: "March 2025 - Present",
    desc: "Engineered robust and scalable full-stack web applications at Sahyadri Software Company using the MERN stack. Led the development of responsive user interfaces, integrated RESTful APIs, and ensured seamless performance optimization. Actively collaborated with cross-functional teams in an agile environment to deliver high-quality software solutions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Electron Js",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MySQL",
      "REST API's",
    ],
  },
  {
    id: 1,
    img: aicte,
    role: "AI/ML Intern",
    company: "Google AICTE Eduskills Virtual Internship",
    date: "July 2024 - December 2024",
    desc: "Completed a virtual internship focused on Artificial Intelligence and Machine Learning, gaining practical experience in developing and training ML models using Python and TensorFlow. Worked on real-world datasets, performed data preprocessing, implemented supervised and unsupervised learning algorithms, and evaluated model performance. Strengthened understanding of core AI/ML concepts through hands-on projects and guided learning modules.",
    skills: [
      "Python",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: i2it,
    school: "International Institute of Information Technology (I²IT), Pune",
    date: "January 2021 - July 2025",
    grade: "8.36 CGPA",
    desc: "Graduated with a Bachelor's degree (BE) in Information Technology from the International Institute of Information Technology. Gained a strong foundation in software development, programming, and core computer science subjects such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, and Software Engineering. Actively participated in coding competitions, technical workshops, and project-based learning, which played a vital role in strengthening my technical expertise and professional growth.",
    degree: "Bachelor of Engineering - BE",
  },
  {
    id: 2,
    img: shahu,
    school: "Rajarshi Shahu Junior Science College, Latur",
    date: "Apr 2019 - March 2021",
    grade: "90%",
    desc: "I completed my Class 12 education from Rajarshi Shahu Junior Science College, Latur, under the Maharashtra State Board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "State Board (XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: marwadi,
    school: "Rajasthan Marwadi School",
    date: "Apr 2018 - March 2019",
    grade: "89.60%",
    desc: "I completed my Class 10 education from Rajasthan Marwadi School under the Maharashtra State Board, where I studied core subjects including Science, Mathematics, and Social Science. I secured 89.60% in the final examination.",
    degree: "State Board (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Mock Interviewer",
    description:
      "An intelligent and interactive web application that simulates real-world interview scenarios using AI. Built with React.js and integrated with OpenAI's GPT API, it provides personalized, domain-specific mock interviews for software roles. Users receive instant feedback, performance analysis, and improvement suggestions, making it an invaluable tool for placement preparation and skill enhancement.",
    image: prepwise,
    tags: ["HTML", "CSS", "TypeScript", "Next JS", "API", "Vapi", "Firebase"],
    github: "https://github.com/Airaf724/interview-prep",
    webapp: "https://interviewprep-ten.vercel.app/",
  },
  {
    id: 1,
    title: "Anime Sphere",
    description:
      "A visually engaging anime sharing platform where users can upload, explore, and interact with anime-themed content. Built with React.js and React Query for efficient data fetching, and powered by Appwrite on the backend for authentication, storage, and database handling. The platform features user profiles, like/follow functionality, and a seamless content-sharing experience for anime enthusiasts.",
    image: snapdragon,
    tags: ["React JS", "React Query", "Appwrite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Airaf724/Social-media-app",
    webapp: "https://social-media-app-steel-two.vercel.app/",
  },
  {
    id: 2,
    title: "ShopEasy - Amazon Price Tracker",
    description:
      "A robust full-stack application built with Next.js for tracking Amazon product prices in real time. Leveraging cron jobs and the Cheerio library for web scraping, it automatically monitors product pages and sends email notifications when prices drop or stock status changes. Ideal for bargain hunters looking to automate their deal tracking.",
    image: shopeasy, // replace with your actual image import
    tags: [
      "Next.js",
      "Cron Job",
      "Web Scraping",
      "Cheerio",
      "JavaScript",
      "Nodemailer",
    ],
    github: "https://github.com/Airaf724/Amazon-product_price-tracker-ShopEasy",
    webapp: "https://shpeasy-product-tracker.netlify.app/",
  },
  {
    id: 3,
    title: "Eventio - Event Management System",
    description:
      "A full-stack event management platform designed to simplify event planning and participation in colleges. Eventio allows admins to create events, generate QR codes for attendance, and manage registrations, while students can browse upcoming events and mark attendance via QR code scanning. Built using React.js, Node.js, and MySQL, with Zustand for state management and Cloudinary for image handling.",
    image: eventio,
    tags: [
      "React JS",
      "Node.js",
      "MySQL",
      "Zustand",
      "Multer",
      "Cloudinary",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Airaf724/Event_io",
    webapp: "https://event-io-g1e2.onrender.com/",
  },
  {
    id: 4,
    title: "Responsive UI from Figma Design",
    description:
      "A pixel-perfect, fully responsive frontend built using React.js by converting a detailed Figma design into a working web interface. The project focuses on clean code structure, mobile-first responsiveness, and seamless user experience across all devices, closely matching the original design specifications.",
    image: hoobank, // replace with your actual image import
    tags: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Figma",
    ],
    github: "https://github.com/Airaf724/Reactjs-responsive_webApp-Hoobank",
    webapp: "https://hoobank-mocha.vercel.app/",
  },
  {
    id: 5,
    title: "E-Shop - E-commerce Platform",
    description:
      "A secure and scalable e-commerce website developed using Node.js and JSX, offering a seamless shopping experience. The platform features product listings, cart management, and a checkout system integrated with Razorpay for secure payments. It includes CSRF protection and robust backend handling for user authentication and order processing.",
    image: ecommerce, // replace with your actual image import
    tags: [
      "Node.js",
      "JSX",
      "Express",
      "CSRF Protection",
      "Razorpay",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/Airaf724/milestone-project",
    webapp: "https://e-commarce-project.onrender.com",
  },
];
