"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ProjectContext = createContext({});

export const useProjectContext = () => useContext(ProjectContext);

const ProjectContextProvider = ({ children }) => {
  // initial position coordinates
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  // segregate projects into Featured / Personal
  const segregateProjects = (projects) => {
    setFeaturedProjects(
      projects
        .filter((project) => project.fields.type === "Featured")
        .map((project) => project.fields)
    );

    setPersonalProjects(
      projects
        .filter((project) => project.fields.type !== "Featured")
        .map((project) => project.fields)
    );
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("project")
      .then((data) => {
        segregateProjects(data);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    featuredProjects,
    personalProjects,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
