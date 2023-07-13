import Iti from "../assets/iti.png";
import Upwork from "../assets/upwork.svg";
import javascript from "../assets/technologies/javascript.png";
import typescript from "../assets/technologies/typescript.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import reactjs from "../assets/technologies/reactjs.png";
import redux from "../assets/technologies/redux.png";
import tailwind from "../assets/technologies/tailwind.png";
import nodejs from "../assets/technologies/nodejs.png";
import mongodb from "../assets/technologies/mongodb.png";
import git from "../assets/technologies/git.png";
import figma from "../assets/technologies/figma.png";
import flutter from "../assets/technologies/flutter.png";
import dart from "../assets/technologies/dart.png";
import firebase from "../assets/technologies/firebase.png";
import threejs from "../assets/technologies/threejs.svg";
import customizer from "../assets/projects/customizer.jpeg";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import nanny from "../assets/projects/nanny.jpg";
import whosapp from "../assets/projects/whosapp.jpg";
import football from "../assets/projects/football.png";

export const Infos = {
  summary:
    "Passionate and versatile developer skilled in crafting innovative, user-friendly applications. Dedicated to continuous learning and growth, leveraging industry knowledge to deliver exceptional results. Committed to building visually stunning apps that seamlessly blend form and function for an exceptional user experience",
  experience: [
    {
      img: Iti,
      title: "Front-end & Cross-platform Intern",
      place: "Information Technology Institute (ITI) , Cairo University",
      date: "Mar 2023 - Jun 2023",
      isIti: true,
    },
    {
      img: Upwork,
      title: "Software Developer",
      place: "Upwork",
      date: "Aug 2021 - Present",
      isIti: false,
    },
  ],
  technologies: [
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
      name: "Flutter",
      icon: flutter,
    },
    // {
    //   name: "Dart",
    //   icon: dart,
    // },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
  ],
  projects: [
    {
      img: customizer,
      title: "3D Customzier",
      subTitle:
        "An interactive web app for customizing 3D objects. Unleash your creativity with advanced graphics and intuitive controls, creating unique visual experiences.",
      tech: [
        {
          name: "#react",
          color: "#a1e9ff",
        },
        {
          name: "#threejs",
          color: "#ffc8ae",
        },
        {
          name: "#valtio",
          color: "#ffcc80",
        },
        {
          name: "#tailwind",
          color: "#a5d6a7",
        },
        {
          name: "#framer-motion",
          color: "#ffe082",
        },
      ],
      demo: "https://drive.google.com/file/d/1agve-IMHo6YsskTgJeGMZedT4Ixltsq-/view?usp=drive_link",
      github: "https://github.com/syomna/3D-Customizer",
    },
    {
      img: chatty,
      title: "Chatty",
      subTitle:
        "A dynamic chat web app for real-time communication. Enjoy features like secure login/register, emojis, profile editing, and customizable themes.",
      tech: [
        {
          name: "#react",
          color: "#a1e9ff",
        },
        {
          name: "#mui",
          color: "#ffc8ae",
        },
        {
          name: "#nodejs",
          color: "#ffcc80",
        },
        {
          name: "#mongodb",
          color: "#a5d6a7",
        },
        {
          name: "#socket.io",
          color: "#ffe082",
        },
      ],
      demo: "https://drive.google.com/file/d/1rShsU0jDZ5OSrDKByA67yWjBIbRGOIQ4/view?usp=drive_link",
      github: "https://github.com/syomna/Chatty-Reactjs-Nodejs-app",
    },

    {
      img: ipark,
      title: "IPark",
      subTitle:
        "A web & mobile app for finding nearby garages, reserve spots, and manage payments. Admin dashboard for garage approval.",
      tech: [
        {
          name: "#react",
          color: "#a1e9ff",
        },
        {
          name: "#react-native",
          color: "#a1e9ff",
        },
        {
          name: "#redux-toolkit",
          color: "#ffcc80",
        },
        {
          name: "#firebase",
          color: "#ffc8ae",
        },
        {
          name: "#stripe",
          color: "#ffcc80",
        },
        {
          name: "#mui",
          color: "#a5d6a7",
        },
        {
          name: "#google-cloud",
          color: "#ffe082",
        },
      ],
      demo: "https://drive.google.com/drive/folders/1Uq7eTYdla0i_A9y6TSm7du9MjH2trya6?usp=drive_link",
      github: "https://github.com/Nader-CS/parking-system",
    },

    {
      img: nanny,
      title: "NannyFinder",
      subTitle:
        "A mobile app for job applications, filtering profiles and efficient communication. Includes a web version and an admin dashboard.",
      tech: [
        {
          name: "#flutter",
          color: "#a1e9ff",
        },
        {
          name: "#firebase",
          color: "#ffcc80",
        },
        {
          name: "#dynamic-links",
          color: "#ffc8ae",
        },
        {
          name: "#flutter-web",
          color: "#ffcc80",
        },
        {
          name: "#hosting",
          color: "#a5d6a7",
        },
        {
          name: "#bloc",
          color: "#a5d6a7",
        },
      ],
      isApp: true,
      playStore:
        "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
      appStore: "https://apps.apple.com/app/id6443669769",
    },

    {
      img: whosapp,
      title: "Whosapp",
      subTitle:
        "A mobile app for discovering and connecting with nearby service providers. Service providers can create and showcase their services.",
      tech: [
        {
          name: "#flutter",
          color: "#a1e9ff",
        },
        {
          name: "#firebase",
          color: "#ffcc80",
        },
        {
          name: "#fcm",
          color: "#ffc8ae",
        },
        {
          name: "#google-cloud",
          color: "#ffcc80",
        },
        {
          name: "#bloc",
          color: "#a5d6a7",
        },
      ],
      isApp: true,
      playStore:
        "https://play.google.com/store/apps/details?id=com.whos.whosapp",
      appStore: "https://apps.apple.com/eg/app/whosapp-app/id1642543173",
    },

    {
      img: football,
      title: "Ghana Football",
      subTitle:
        "A mobile app for experiencing live football matches and staying updated with the latest news.",
      tech: [
        {
          name: "#flutter",
          color: "#a1e9ff",
        },
        {
          name: "#firebase",
          color: "#ffcc80",
        },
        {
          name: "#api",
          color: "#ffc8ae",
        },
        {
          name: "#google-analytics",
          color: "#ffcc80",
        },
        {
          name: "#bloc",
          color: "#a5d6a7",
        },
      ],
      isApp: true,
      playStore:
        "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
      appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
    },
  ],
};
