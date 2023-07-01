"use client";

import { useState, createContext, useContext } from "react";

const ProjectContext = createContext({});

export const useProjectContext = () => useContext(ProjectContext);

const ProjectContextProvider = ({ children }) => {
  // initial position coordinates
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const value = {
    featuredProjects,
    setFeaturedProjects,
    personalProjects,
    setPersonalProjects,
    showMore,
    setShowMore,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
