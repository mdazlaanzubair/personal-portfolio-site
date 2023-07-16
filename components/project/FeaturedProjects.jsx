"use client";

import { useProjectContext } from "@/context/ProjectContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { FiExternalLink as LiveViewIcon } from "react-icons/fi";

function FeaturedProject({}) {
  const { featuredProjects } = useProjectContext();

  return featuredProjects ?? featuredProjects.length > 0 ? (
    <div className="w-full flex flex-col gap-16 my-5 justify-center items-center">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-5 lg:my-5 lg:gap-0 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <a
            href={project.fields.url}
            target="_blank"
            className="w-full lg:w-1/2 relative hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
          >
            <div className="shadow-2xl -z-10">
              <img
                className="w-full h-full object-cover"
                src={"https:" + project.fields.image.fields.file.url}
                alt="featured project image"
              />
            </div>
          </a>
          <div
            className={`w-full lg:w-1/2 flex flex-col justify-end z-10 ${
              index % 2 === 0
                ? "text-right lg:-ml-16 items-end"
                : "lg:-mr-16 items-start"
            }`}
          >
            <h1 className="text-2xl font-bold mb-5">{project.fields.title}</h1>
            <div className="py-5 lg:p-5 bg-base-100 rounded-sm text-sm lg:shadow-lg">
              {documentToReactComponents(project.fields.description)}
            </div>
            <div className="flex flex-row flex-wrap gap-5 items-center">
              {project.fields.tech.map((skill, index) => (
                <div key={index} className="text-primary">
                  <span className="text-xs font-semibold">{skill}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row flex-wrap items-center">
              {project.fields.url ? (
                <a
                  href={project.fields.url}
                  target="_blank"
                  className="group btn btn-ghost btn-circle border-none text-xl hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
                >
                  <span className="group-hover:text-primary">
                    <LiveViewIcon />
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default FeaturedProject;
