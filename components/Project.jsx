"use client";

import { BiCodeAlt as CodeIcon } from "react-icons/bi";
import { FiExternalLink as LiveViewIcon } from "react-icons/fi";

const Project = () => {
  const featured_projects = [
    {
      title: "Project Title 1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dicta distinctio mollitia quidem, aperiam alias expedita in vitae, fugit eos at beatae eaque voluptas ipsam ipsa architecto tempore molestiae officia.",
      url: "#",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
      tech: ["react js", "next js", "mongoose", "atlas"],
      links: [
        { title: "Source Code", url: "#", Icon: CodeIcon },
        { title: "Live View", url: "#", Icon: LiveViewIcon },
      ],
    },
    {
      title: "Project Title 2",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dicta distinctio mollitia quidem, aperiam alias expedita in vitae, fugit eos at beatae eaque voluptas ipsam ipsa architecto tempore molestiae officia.",
      url: "#",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
      tech: ["react js", "next js", "mongoose", "atlas"],
      links: [
        { title: "Source Code", url: "#", Icon: CodeIcon },
        { title: "Live View", url: "#", Icon: LiveViewIcon },
      ],
    },
    {
      title: "Project Title 3",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dicta distinctio mollitia quidem, aperiam alias expedita in vitae, fugit eos at beatae eaque voluptas ipsam ipsa architecto tempore molestiae officia.",
      url: "#",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
      tech: ["react js", "next js", "mongoose", "atlas"],
      links: [
        { title: "Source Code", url: "#", Icon: CodeIcon },
        { title: "Live View", url: "#", Icon: LiveViewIcon },
      ],
    },
  ];

  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        Featured Projects
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
        Portfolio
      </h1>
      <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-5">
        Let&apos;s sneak a peek at my work.
      </h2>
      <p className="mb-5 font-light leading-loose text-navy-slate w-full md:max-w-2xl text-xs md:text-base">
        Here is my short-listed work that I delivered to my clients and as well
        as my personal projects.
      </p>
      <div className="w-full flex flex-col gap-16 mt-5 justify-center">
        {featured_projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? " lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <a
              href={project.url}
              className="group w-full lg:w-1/2 h-auto relative"
            >
              <div className="bg-primary-focus">
                <img
                  className="w-full h-full object-cover mix-blend-multiply opacity-75 hover:opacity-1 hover:mix-blend-normal transition-all ease-in-out duration-1000"
                  src={project.img}
                  alt="project image"
                />
              </div>
            </a>
            <div
              className={`w-full lg:w-1/2 h-auto flex flex-col justify-between z-10 ${
                index % 2 === 0
                  ? "text-right lg:-ml-16 items-end"
                  : "lg:-mr-16 items-start"
              }`}
            >
              <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
                Featured Projects
              </h3>
              <h1 className="text-2xl font-bold mb-5 text-navy-slate-light">
                {project.title}
              </h1>
              <p className="p-5 bg-base-100 rounded-sm text-sm shadow-lg">
                {project.desc}
              </p>
              <div className="flex flex-row flex-wrap gap-5 items-center">
                {project.tech.map((skill, index) => (
                  <div key={index} className="text-primary">
                    <span className="text-xs font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap items-center">
                {project.links.map((link, index) => {
                  const { title, url, Icon } = link;
                  return (
                    <a
                      key={index}
                      href={url}
                      className="group btn btn-ghost btn-circle border-none text-xl hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
                    >
                      <span className="text-navy-slate-light group-hover:text-primary">
                        <Icon />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
