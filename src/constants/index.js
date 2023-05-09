import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BIG DAWG HOMIE",
    company_name: "YOUR MOM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
    ],
  },
  {
    title: "BIG DAWG HOMIE",
    company_name: "YOUR MOM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
    ],
  },
  {
    title: "BIG DAWG HOMIE",
    company_name: "YOUR MOM",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
    ],
  },
  {
    title: "BIG DAWG HOMIE",
    company_name: "YOUR MOM",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
      "i touched bare people",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Demitri has a very very volumptuous ass",
    name: "Madhav Bez",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I hit rihanna",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Shaiyaan you have a beautiful smile",
    name: "Demitri Lee",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
    image: tripguide,
    source_code_link: "https://github.com/Infinity606/Test-Legends",
  },
  {
    name: "Project 2",
    description:
      "im gonna work on something super cool dawg",
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
    image: carrent,
    source_code_link: "https://github.com/Infinity606",
  },
  {
    name: "Project 3",
    description:
      "im gonna work on something super cool dawg",
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
    image: carrent,
    source_code_link: "https://github.com/Infinity606",
  },
];

export { services, technologies, experiences, testimonials, projects };