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
    carrent,
    jobit,
    tripguide,
    threejs,
    Novelis,
    ENSAO,
    freelancer
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Full Stack Developer",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "#fff",
      date: "January 2018 - Present",
      points: [
        "Developing and maintaining web applications using PHP, CMS like Wordpress and Wix React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developr",
      company_name: "Novelis",
      icon: Novelis,
      iconBg: "#fff",
      date: "Juin 2023- Present",
      points: [
        "Developing and maintaining web applications using Spring Boot, Angular NextJS, NestJS and React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ENSAO",
      icon: ENSAO,
      iconBg: "#fff",
      date: "Jan 2019 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Salah proved me wrong.",
      name: "CLIENT 1",
      designation: "CEO",
      company: "OrientalUP",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Salah does.",
      name: "Togoshi tokomora",
      designation: "COO",
      company: "Van Den JP",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Salah optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Sharon LuLu",
      designation: "CTO",
      company: "123 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Anist-Rea",
      description:
      "A web-based platform designed to streamline and simplify the documentation and management tasks involved in the field of anesthesiology and patient recovery. This platform aims to provide an efficient solution for anesthetists and medical professionals, enabling them to easily handle and organize paperwork related to anesthesia and the reanimation process.",
       tags: [
        {
          name: "HTML + js",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Sbai-Salah/Anist-Rea",
    },
    {
      name: "Airbnb Clone",
      description:
      "The Airbnb Clone is a web application project that replicates the core functionalities and user interface of the popular vacation rental marketplace, Airbnb.",
      tags: [
        {
          name: "NextJS 13",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Sbai-Salah/Airbnb-clone",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, trips, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "NextJS 13",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "NestJS",
          color: "black-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Sbai-Salah",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };