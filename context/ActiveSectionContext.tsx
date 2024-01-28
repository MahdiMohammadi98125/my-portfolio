"use client";
import React, { createContext, useState, useContext } from "react";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

type SectionNameContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

type ActiveSectionContextTypeProps = {
  children: React.ReactNode;
};

export const ActiveSectionContext =
  createContext<SectionNameContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextTypeProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error(
      "useActiveSection must be used within the ActiveSectionProvider"
    );
  return context;
};
