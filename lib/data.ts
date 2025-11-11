import bankist from "@/public/project-screenshots/bankist-website.png";
import eatN from "@/public/project-screenshots/eat-n-split.png";
import expenseTracker from "@/public/project-screenshots/expense-tracker.png";
import gameHub from "@/public/project-screenshots/game-hub.png";
import grocery from "@/public/project-screenshots/grocery.jpg";
import guess from "@/public/project-screenshots/guess-the-number.png";
import issueTracker from "@/public/project-screenshots/issue-tracker.png";
import mapty from "@/public/project-screenshots/mapty.jpg";
import nexter from "@/public/project-screenshots/nexter.png";
import omniFood from "@/public/project-screenshots/omni-food.png";
import onlineService from "@/public/project-screenshots/online-service.jpg";
import pigGame from "@/public/project-screenshots/pig-game.png";
import trillo from "@/public/project-screenshots/trillo.jpg";
import eshop from "@/public/project-screenshots/eshop.png";
import learninbox from "@/public/project-screenshots/learninbox.png";
import peshtaaz from "@/public/project-screenshots/peshtaaz.jpg";
import marscoders from "@/public/project-screenshots/marscoders.png";
import jeyhuntech from "@/public/project-screenshots/jeyhun.jpg";
import cmw from "@/public/project-screenshots/cmw.jpg";
import hussaini from "@/public/project-screenshots/hussaini.jpg";
import wahswaad from "@/public/project-screenshots/wahswaad.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end web developer",
    location: "Mars Coders",
    description:
      "Developed and maintained scalable React and Next.js applications",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Front-end developer",
    location: "Jeyhun Tech",
    description:
      "I contributed as a Frontend Developer at Jeyhun Tech, where I refined my abilities in designing intuitive and visually compelling user interfaces.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Learninbox",
    description:
      "Unlock your full potential with personalized classes and training, carefully crafted to meet your specific needs and fulfill your ambitions.",
    tags: ["Next.js", "Nest.js", "Graphql", "Next-auth", "Mongodb"],
    imageUrl: learninbox,
    url: "https://learninbox.com",
  },
  {
    title: "Peshtaaz",
    description:
      "We are transforming your properties into a showcase masterpiece.",
    tags: ["Next.js", "Tailwindcss"],
    imageUrl: peshtaaz,
    url: "https://peshtaaz.vercel.app/",
  },
  {
    title: "Mars Coders",
    description:
      "Modern, Cool, and Effective systems with our best development team",
    tags: ["Next.js", "Tailwindcss"],
    imageUrl: marscoders,
    url: "https://www.marscoders.tech",
  },
  {
    title: "Jeyhun Tech",
    description: "Welcome to Jeyhun Tech, Where innovation meets expertise.",
    tags: ["Next.js", "Tailwindcss"],
    imageUrl: jeyhuntech,
    url: "https://jeyhuntech.com",
  },
  {
    title: "Change Makers",
    description:
      "We are a youth-led volunteer community dedicated to supporting quality education and advocating for human rights in Afghanistan",
    tags: ["Next.js", "Tailwindcss", "Prisma", "Mongodb", "Rest API"],
    imageUrl: cmw,
    url: "https://www.cmworld.org",
  },
  {
    title: "Reza Hussaini",
    description:
      "Reza Hussaini is a human rights activist, journalist, and entrepreneur committed to education, Human Right, and democracy.",
    tags: ["Next.js", "Tailwindcss", "Prisma", "Mongodb", "Rest API"],
    imageUrl: hussaini,
    url: "https://www.rezahussaini.com",
  },
  {
    title: "Wahswaad",
    description:
      "Wah Swaad sees food as more than a meal—it’s a connection to heritage, culture, and tradition, filled with flavor and love.",
    tags: ["Next.js", "Tailwindcss", "Graphql API", "Shopify"],
    imageUrl: wahswaad,
    url: "https://www.wahswaad.com",
  },
  {
    title: "E-shop",
    description:
      "E-Shop is a sleek web app using React, Next.js, Tailwind CSS, Prisma, MongoDB, and Stripe.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "Stripe",
      "MUI",
    ],
    imageUrl: eshop,
    url: "https://mahdi-e-shop.vercel.app",
  },
  {
    title: "issue-tracker",
    description:
      "track project issues with a dynamic web app powered by Next.js, MongoDB, and Prisma for seamless performance and robust database integration.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: issueTracker,
    url: "https://issue-tracker-seven-black.vercel.app/",
  },
  {
    title: "game-hub",
    description:
      "Explore a diverse gaming universe in the ultimate Game Hub, a centralized platform catering to all your gaming interests and experiences.",
    tags: ["React", "TypeScript", "Tailwind", "zod"],
    imageUrl: gameHub,
    url: "https://game-hub-tau-gules.vercel.app/",
  },
  {
    title: "Online-service",
    description:
      "Elevate your online experience with our comprehensive online-service website, offering a seamless platform for diverse digital solutions at your fingertips.",
    tags: ["React", "Tailwind"],
    imageUrl: onlineService,
    url: "https://online-service-42520e.netlify.app",
  },
  {
    title: "expense-tracker",
    description:
      "Take control of your finances effortlessly with our Expense Tracker app, providing a user-friendly interface for managing and analyzing your expenditures on the go.",
    tags: ["React", "CSS Module"],
    imageUrl: expenseTracker,
    url: "https://expense-tracker-app-f390.netlify.app/",
  },
  {
    title: "eat-n-split",
    description:
      "a web application that you can split your bill when you are in the resturant.",
    tags: ["React", "CSS"],
    imageUrl: eatN,
    url: "https://eat-n-split-40b333.netlify.app/",
  },
  {
    title: "Mapty",
    description:
      "A public web app that users can measure their distance while running or cycling.",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: mapty,
    url: "https://mapty-seven-pi.vercel.app",
  },

  {
    title: "bankist-website",
    description:
      "Discover financial empowerment with Bankist's landing page, where sleek design meets user-friendly interfaces, creating a seamless gateway to modern banking solutions.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: bankist,
    url: "https://bankist-website-4cc7be.netlify.app",
  },

  {
    title: "pig-game",
    description:
      "Pig Game is a simple and fun dice game that is often played as a party game or a family activity. It is also known by various names such as Pig Dice, Pass the Pigs, or Jeopardy Dice. ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: pigGame,
    url: "https://pig-game-435c45.netlify.app",
  },

  {
    title: "Guess the number",
    description:
      "Engage in a thrilling guessing game on our HTML, CSS, and JS powered website. ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: guess,
    url: "https://guess-number-8b1de8.netlify.app",
  },
  {
    title: "grocery",
    description:
      "Experience seamless grocery shopping with our HTML and CSS crafted website. ",
    tags: ["HTML", "CSS"],
    imageUrl: grocery,
    url: "https://grocery-website-amber.vercel.app/",
  },
  {
    title: "Nexter",
    description:
      "Discover the epitome of real estate elegance on our Nexter landing page. Crafted with HTML and CSS.",
    tags: ["HTML", "CSS"],
    imageUrl: nexter,
    url: "https://nexter-project-5dfc1e.netlify.app",
  },
  {
    title: "Trillo",
    description:
      "Embark on seamless travel planning with our Trillo landing page, meticulously crafted in HTML and CSS. ",
    tags: ["HTML", "CSS"],
    imageUrl: trillo,
    url: "https://trillo-project-d13a90.netlify.app",
  },
  {
    title: "Omni-food",
    description:
      "Indulge your senses on the Omni-Food restaurant landing page, a culinary haven brought to life through HTML and CSS. ",
    tags: ["HTML", "CSS"],
    imageUrl: omniFood,
    url: "https://omnifood-mahdi98125.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Scss",
  "Tailwind",
  "Bootstrap",
  "Chakra-ui",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Prisma",
  "MongoDB",
  "Github",
  "Git",
] as const;
