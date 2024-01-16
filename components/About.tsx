"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="max-w-[45rem] text-center mb-28 leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'am Mahdi Mohammadi. A junior{" "}
        <span className="font-medium">Frontend developer</span>, passionate in
        learning tech{" "}
        <span className="font-medium">
          And learning to specialize in Web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.section>
  );
};

export default About;
