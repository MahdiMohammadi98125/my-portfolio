"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
        initial={{
          y: -100,
          opacity: 0,
          x: "-50%",
        }}
        animate={{
          y: 0,
          opacity: 1,
          x: "-50%",
        }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center h-3/4"
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
            >
              <Link
                href={link.hash}
                className="flex items-center justify-center w-full px-3 py-3 transition hover:text-gray-950 "
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
