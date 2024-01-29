"use client";
import { useTheme } from "@/context/ThemeContextProvider";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bg-white rounded-full bottom-5 right-5 backdrop-blur-[0.5] w-[3rem] h-[3rem] shadow-2xl flex justify-center items-center border border-white border-opacity-40 hover:scale-[1.15] active:scale-105 transition-all bg-opacity-80 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeSwitch;
