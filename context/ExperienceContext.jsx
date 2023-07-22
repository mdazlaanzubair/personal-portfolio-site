"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ExperienceContext = createContext({});

export const useExperienceContext = () => useContext(ExperienceContext);

const ExperienceContextProvider = ({ children }) => {
  // initial position coordinates
  const [experiences, setExperiences] = useState([]);
  const [recentExperience, setRecentExperience] = useState({});

  // sorting experience with dates
  const sortExperiences = (experience) => {
    const sortedExperience = experience.sort((experience1, experience2) => {
      return experience2.to.localeCompare(experience1.to);
    });

    return sortedExperience;
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("experience")
      .then((data) => {
        setExperiences(data.map((experience) => experience.fields));

        const recentExp = data.filter(
          (experience) => experience.fields.to === "Present"
        );
        setRecentExperience(recentExp[0].fields);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    experiences,
    recentExperience,
    sortExperiences,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
