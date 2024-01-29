import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Front-End Developer",
    location: "Jeyhun tech",
    description: "I worked as a front-end developer for 2 years ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Herat, Af",
    description:
      "I am learning Node.js. Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. ",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "issue-tracker",
    description:
      "track project issues with a dynamic web app powered by Next.js, MongoDB, and Prisma for seamless performance and robust database integration.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: issueTracker,
  },
  {
    title: "game-hub",
    description:
      "Explore a diverse gaming universe in the ultimate Game Hub, a centralized platform catering to all your gaming interests and experiences.",
    tags: ["React", "TypeScript", "Tailwind", "zod"],
    imageUrl: gameHub,
  },
  {
    title: "Mapty",
    description:
      "A public web app that users can measure their distance while running or cycling.",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: mapty,
  },
  {
    title: "Online-service",
    description:
      "Elevate your online experience with our comprehensive online-service website, offering a seamless platform for diverse digital solutions at your fingertips.",
    tags: ["React", "Tailwind"],
    imageUrl: onlineService,
  },
  {
    title: "bankist-website",
    description:
      "Discover financial empowerment with Bankist's landing page, where sleek design meets user-friendly interfaces, creating a seamless gateway to modern banking solutions.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: bankist,
  },
  {
    title: "expense-tracker",
    description:
      "Take control of your finances effortlessly with our Expense Tracker app, providing a user-friendly interface for managing and analyzing your expenditures on the go.",
    tags: ["React", "CSS Module"],
    imageUrl: expenseTracker,
  },
  {
    title: "pig-game",
    description:
      "Pig Game is a simple and fun dice game that is often played as a party game or a family activity. It is also known by various names such as Pig Dice, Pass the Pigs, or Jeopardy Dice. ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: pigGame,
  },
  {
    title: "eat-n-split",
    description:
      "a web application that you can split your bill when you are in the resturant.",
    tags: ["React", "CSS"],
    imageUrl: eatN,
  },
  {
    title: "grocery",
    description:
      "Experience seamless grocery shopping with our HTML and CSS crafted website. ",
    tags: ["HTML", "CSS"],
    imageUrl: grocery,
  },
  {
    title: "Guess the number",
    description:
      "Engage in a thrilling guessing game on our HTML, CSS, and JS powered website. ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: guess,
  },
  {
    title: "Nexter",
    description:
      "Discover the epitome of real estate elegance on our Nexter landing page. Crafted with HTML and CSS.",
    tags: ["HTML", "CSS"],
    imageUrl: nexter,
  },
  {
    title: "Trillo",
    description:
      "Embark on seamless travel planning with our Trillo landing page, meticulously crafted in HTML and CSS. ",
    tags: ["HTML", "CSS"],
    imageUrl: trillo,
  },
  {
    title: "Omni-food",
    description:
      "Indulge your senses on the Omni-Food restaurant landing page, a culinary haven brought to life through HTML and CSS. ",
    tags: ["HTML", "CSS"],
    imageUrl: omniFood,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Scss",
  "Bootstrap",
  "Radix-ui",
  "Chakra-ui",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",

  "Tailwind",
  "Prisma",
  "MongoDB",
] as const;
