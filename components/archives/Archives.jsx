"use client";

import { motion } from "framer-motion";

import { useProjectContext } from "@/context/ProjectContext";
import ProjectCard from "./ProjectCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Archives = () => {
  const { personalProjects } = useProjectContext();
  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen justify-center px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="w-full flex flex-col my-5 justify-start items-start">
        <motion.h3
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold tracking-widest mb-3 px-1"
        >
          Personal projects
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
        >
          Archives<span className="text-primary">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-5"
        >
          Let&apos;s sneak a peek at my work.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base"
        >
          Here is a list of my repositories, work, projects that I have built
          while learning, exploring, testing and trying the web technologies.
        </motion.p>
      </div>

      {personalProjects ?? personalProjects.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 justify-between items-">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={documentToReactComponents(project.description)}
              skills={project.tech}
              url={project.url}
              imgUrl={project.image.fields.file.url}
              index={index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Archives;
