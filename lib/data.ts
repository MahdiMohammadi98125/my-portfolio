import cmw from "@/public/project-screenshots/cmw.jpg";
import hussaini from "@/public/project-screenshots/hussaini.jpg";
import jeyhuntech from "@/public/project-screenshots/jeyhun.jpg";
import learninbox from "@/public/project-screenshots/learninbox.png";
import marscoders from "@/public/project-screenshots/marscoders.png";
import peshtaaz from "@/public/project-screenshots/peshtaaz.jpg";
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
