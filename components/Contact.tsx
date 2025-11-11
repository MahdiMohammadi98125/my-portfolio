"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:mahdi202201.mohammadi@gmai.com" className="underline">
          mahdimohammadi.webdev@gmail.com
        </a>{" "}
        {""}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
