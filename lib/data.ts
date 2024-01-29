import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bankist from "@/public/project-screenshots/bankist-website.jpg";
import eatN from "@/public/project-screenshots/eat-n-split.png";
import expenseTracker from "@/public/project-screenshots/expense-tracker.png";
import gameHub from "@/public/project-screenshots/game-hub.jpg";
import grocery from "@/public/project-screenshots/grocery.jpg";
import guess from "@/public/project-screenshots/guess-the-number.png";
import issueTracker from "@/public/project-screenshots/issue-tracker.png";
import mapty from "@/public/project-screenshots/mapty.jpg";
import nexter from "@/public/project-screenshots/nexter.jpg";
import omniFood from "@/public/project-screenshots/omni-food.jpg";
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
    description: "I worked this full stack project for 2 weeks",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: issueTracker,
  },
  {
    title: "game-hub",
    description: "I worked this game hub project with api",
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
    description: "A landing page for online services",
    tags: ["React", "Tailwind"],
    imageUrl: onlineService,
  },
  {
    title: "bankist-website",
    description: "A landing page for bankist",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: bankist,
  },
  {
    title: "expense-tracker",
    description: "A public app that track expenses",
    tags: ["React", "CSS"],
    imageUrl: expenseTracker,
  },
  {
    title: "pig-game",
    description:
      "Pig Game is a simple and fun dice game that is often played as a party game or a family activity. It is also known by various names such as Pig Dice, Pass the Pigs, or Jeopardy Dice. ",
    tags: ["React", "CSS"],
    imageUrl: pigGame,
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
