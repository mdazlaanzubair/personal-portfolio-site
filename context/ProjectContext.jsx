"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ProjectContext = createContext({});

export const useProjectContext = () => useContext(ProjectContext);

const ProjectContextProvider = ({ children }) => {
  // initial position coordinates
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [lessProjects, setLessProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("project")
      .then((data) => {
        // setting featured projects
        setFeaturedProjects(
          data.filter((project) => project.fields.type === "Featured")
        );

        // setting personal projects conditionally
        const personal_projects = data.filter(
          (project) => project.fields.type === "Personal"
        );

        // setting all projects - list all personal_projects
        setPersonalProjects(personal_projects);

        // setting less projects - list half of personal_projects
        setLessProjects([
          ...personal_projects.slice(0, personal_projects.length / 2),
        ]);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    featuredProjects,
    personalProjects,
    lessProjects,
    showMore,
    setShowMore,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
