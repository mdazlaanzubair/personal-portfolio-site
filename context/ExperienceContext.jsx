"use client";

import { useState, createContext, useContext } from "react";

const ExperienceContext = createContext({});

export const useExperienceContext = () => useContext(ExperienceContext);

const ExperienceContextProvider = ({ children }) => {
  // initial position coordinates
  const [experiences, setExperiences] = useState([]);
  const [activeExperience, setActiveExperience] = useState({});

  const value = {
    experiences,
    setExperiences,
    activeExperience,
    setActiveExperience,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
