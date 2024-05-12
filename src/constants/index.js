import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  photoshop,
  CPlus,
  html,
  css,
  reactjs,
  tailwind,
  AfterEffects,
  PremierePro,
  git,
  figma,
  aws,
  plasp,
  Calle,
  Kumon,
  Usertesting,
  MCC,
  construction,
  testlegend,
  threejs,
  github,
  instagram,
  linkedin,
} from "../assets";

const social = [
  {
    title: "Github",
    url: "https://github.com/infinity606",
    icon: github,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shaiyaan/",
    icon: linkedin,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/shaiyaan_",
    icon: instagram,
  },
]

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "McMaster Student",
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
    name: "React JS",
    icon: reactjs,
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
    name: "C++",
    icon: CPlus,
  },

  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe After Effects",
    icon: AfterEffects,
  },
  {
    name: "Adobe Premiere Pro",
    icon: PremierePro,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Tutor",
    company_name: "Kumon",
    icon: Kumon,
    iconBg: "#e6e6e6",
    date: "Sept 2017 - Dec 2018",
    points: [
      "Collaborated with students to complete homework assignments, identify lagging skills, and correct weakness",
      "Developed student condfidence through attentive instruction in Math and English, applying positive reinforcement strategies",
      "Tutored struggling, average and advanced students in Math and English course materials",
    ],
  },
  {
    title: "Volunteer",
    company_name: "PLASP Child Care",
    icon: plasp,
    iconBg: "#e6e6e6",
    date: "Sept 2017 - June 2020",
    points: [
      "Worked alongside staff to plan and develop a program of stimulating activities for over 50 children",
      "Assisted and tutored students with homework assignments increasing average grade by 10%",
      "Worked with a team to establish a safe and inclusive environment",
    ],
  },
  {
    title: "Shift Supervisor",
    company_name: "Calle Mediterranean Fusion",
    icon: Calle,
    iconBg: "#e6e6e6",
    date: "Apr 2022 - Present",
    points: [
      "Handled customer needs and desires to ensure customer satisfaction",
      "Delegated tasks and monitored 10 employee performances",
      "Provided guidance and feedback to employees when in need",
      "Handled technological responsibilities; POS system, Payment system, Designed and set up menu display",
    ],
  },
  {
    title: "Application Tester",
    company_name: "UserTesting",
    icon: Usertesting,
    iconBg: "#e6e6e6",
    date: "Jun 2020 - Present",
    points: [
      "Remote position testing websites and applications from companies such as Microsoft, Google and more",
      "Underwent over 200 thorough evaluations, communicating with the companies in ways they can approve their application",
      "Effectively ran a series small tests at multiple points when dealing with the application",
    ],
  },
  {
    title: "Mississauga Career College",
    company_name: "MCC",
    icon: MCC,
    iconBg: "#e6e6e6",
    date: "April 2023 - September 2023",
    points: [
      "Remote position testing websites and applications from companies such as Microsoft, Google and more",
      "Underwent over 200 thorough evaluations, communicating with the companies in ways they can approve their application",
      "Effectively ran a series small tests at multiple points when dealing with the application",
    ],
  },
];

const testimonials = [
  
  {
    courses:
      "Relevant courses taken:",
    points: [
      "first",
      "second",
      "third", 
    ]
  },

/*
  {
    testimonial:
      "Feedback",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Feedback",
    name: "Demitri Lee",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },


  {
    testimonials:
      "Feedback",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonials:
      "Feedback",
    name: "Demitri",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "Test Legends",
    description:
      "A farming rpg style game made using c++ in Game Maker Studio",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Game Maker Studio",
        color: "green-text-gradient",
      },
      {
        name: "Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: testlegend,
    source_code_link: "https://github.com/Infinity606/Test-Legends",
  },
  {
    name: "Project 2",
    description:
      "I'm making something super cool",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/Infinity606",
  },
  {
    name: "Project 3",
    description:
      "I'm making something super cool",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/Infinity606",
  },
  {
    name: "Project 4",
    description:
      "I'm making something super cool",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/Infinity606",
  },
];

export { services, technologies, experiences, testimonials, projects, social };