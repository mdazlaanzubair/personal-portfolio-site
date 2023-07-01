"use client";

import client, { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ExperienceContext = createContext({});

export const useExperienceContext = () => useContext(ExperienceContext);

const ExperienceContextProvider = ({ children }) => {
  // initial position coordinates
  const [experiences, setExperiences] = useState([]);
  const [activeExperience, setActiveExperience] = useState({});

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("experience")
      .then((data) => {
        setExperiences(data);
        setActiveExperience(data[0]);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    experiences,
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
