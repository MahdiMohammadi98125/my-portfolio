"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import myImage from "@/public/mahdi.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={myImage}
              alt="my-image"
              priority={true}
              quality={95}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
              type: "spring",
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="px-4 mt-4 mb-10 text-2xl font-medium text-center !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello I'm Mahdi</span> I'm a {""}
        <span className="font-bold">frontend web developer</span> with{" "}
        <span className="font-bold">3 years</span> {""}of experience. I enjoy
        building {""}
        <span className="italic">sites and apps.</span> My focus is {""}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          className="flex items-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer px-7 hover:scale-110 focus:scale-110 active:scale-105 group border-black/10 dark:bg-white/10"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/mahdi-mohammadi1/"
          target="_blank"
          className="flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full text-[1.35rem]  transition   outline-none cursor-pointer  hover:scale-[1.15] focus:scale-[1.15] active:scale-105 group hover:text-gray-950 borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MahdiMohammadi98125"
          target="_blank"
          className="flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full text-[1.35rem] transition   outline-none cursor-pointer  hover:scale-[1.15] focus:scale-[1.15] active:scale-105 group hover:text-gray-950 borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
