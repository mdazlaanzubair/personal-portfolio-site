"use client";

import FeaturedProject from "./FeaturedProjects";
import { useProjectContext } from "@/context/ProjectContext";
import PersonalProjects from "./PersonalProjects";

const Project = () => {
  const {
    featuredProjects,
    personalProjects,
    lessProjects,
    showMore,
    setShowMore,
  } = useProjectContext();

  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <div className="w-full flex flex-col my-5 justify-start items-start">
        <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
          Client&apos;s Projects
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          Portfolio
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-5">
          Let&apos;s sneak a peek at my work.
        </h2>
        <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
          Here is my short-listed work that I delivered to my clients and as
          well as my personal projects.
        </p>
      </div>

      <FeaturedProject projects={featuredProjects} />

      <PersonalProjects
        lessProjects={lessProjects}
        allProjects={personalProjects}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </div>
  );
};

export default Project;
