"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ProjectContext = createContext({});

export const useProjectContext = () => useContext(ProjectContext);

const ProjectContextProvider = ({ children }) => {
  // initial position coordinates
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("project")
      .then((data) => {
        // setting featured projects
        setFeaturedProjects(
          data.filter((project) => project.fields.type === "Featured")
        );

        // setting all projects - list all personal_projects
        setPersonalProjects(
          data.filter((project) => project.fields.type === "Personal")
        );
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
