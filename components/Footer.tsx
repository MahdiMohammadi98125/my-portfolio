import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()} Mahdi all right reserved.
      </small>
      <p className="text-xs ">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App router & server Actions), Typescript, Tailwind css,
        Framer Motion, Nodemailer, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
