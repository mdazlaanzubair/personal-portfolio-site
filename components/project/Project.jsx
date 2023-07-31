"use client";

import Button from "../Button";
import { useProjectContext } from "@/context/ProjectContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import FeaturedProject from "./FeaturedProject";

const Project = () => {
  const { featuredProjects } = useProjectContext();

  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen justify-center px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="w-full flex flex-col my-5 justify-start items-start">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Featured projects
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          Portfolio<span className="text-primary">.</span>
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-5">
          Let&apos;s sneak a peek at my work.
        </h2>
        <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
          Here is my short-listed work that I delivered to my clients.
        </p>
      </div>

      {featuredProjects ?? featuredProjects.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5 justify-between items-start">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={index}
              title={project.title}
              desc={documentToReactComponents(project.description)}
              skills={project.tech}
              url={project.url}
              imgUrl={project.image.fields.file.url}
            />
          ))}
        </div>
      ) : null}

      <div className="flex justify-center mt-5">
        <Button
          type={"btn"}
          link={"/archives"}
          text={"View more"}
          active_nav_title={"Archive"}
        />
      </div>
    </div>
  );
};

export default Project;
