"use client";

import { BiCodeAlt as CodeIcon } from "react-icons/bi";
import { FiExternalLink as LiveViewIcon } from "react-icons/fi";

import epakaiImg from "@/public/featured_projects/epakai.png";
import analyticsmartImg from "@/public/featured_projects/analyticsmart.png";
import jomrunImg from "@/public/featured_projects/jomrun.png";

const Project = () => {
  const featured_projects = [
    {
      title: "Epakai Commerce",
      desc: `Epakai.com is an online store that sells bathroom and kitchen accessories. The website was build for Pakai Industries Berhad, a Malaysian company that has been in the sanitaryware industry for over 30 years.\n\nThe website was build for a Malaysian client in 2019. The website accepts payments via credit card, PayPal, and bank transfer, has a 4.5 out of 5-star rating on Google Reviews.`,
      url: "https://epakai.com/",
      img: epakaiImg.src,
      tech: ["wordpress", "php", "sql"],
      links: [
        { title: "Live View", url: "https://epakai.com/", Icon: LiveViewIcon },
      ],
    },
    {
      title: "Analyticsmart",
      desc: `Analyticsmart is a data analytics company that provides smart analytical services and solutions to businesses of all sizes.\n\nThe responsive website was made for a Canadian client in 2017. It's built on Wordpress and optimized for search engines.`,
      url: "https://analyticsmart.com/",
      img: analyticsmartImg.src,
      tech: ["wordpress", "php", "sql"],
      links: [
        {
          title: "Live View",
          url: "https://analyticsmart.com/",
          Icon: LiveViewIcon,
        },
      ],
    },
    {
      title: "JomRun",
      desc: "JomRun is a Southeast Asia-based running app that helps users find and register for running events. The website is built on a number of technologies, along with some third-party services, such as Google Maps and Facebook, to provide users with additional functionality. Jomrun is built on a number of reliable and scalable technologies, which ensures that it will be able to handle the growing number of users.",
      url: "https://www.jomrun.com/",
      img: jomrunImg.src,
      tech: ["html", "css", "javascript", "php", "MySQL"],
      links: [
        {
          title: "Live View",
          url: "https://www.jomrun.com/",
          Icon: LiveViewIcon,
        },
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
      <div className="w-full flex flex-col gap-16 my-5 justify-center">
        {featured_projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-5 lg:my-5 lg:gap-0 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <a
              href={project.url}
              target="_blank"
              className="group w-full lg:w-3/4 relative"
            >
              <div className="bg-base-100 shadow-2xl -z-10">
                <img
                  className="w-full h-full object-cover mix-blend-color-dodge opacity-75 hover:opacity-1 hover:mix-blend-normal transition-all ease-in-out duration-1000"
                  src={project.img}
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
              <h1 className="text-2xl font-bold mb-5 text-navy-slate-light">
                {project.title}
              </h1>
              <p className="py-5 lg:p-5 bg-base-100 rounded-sm text-sm lg:shadow-lg">
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
                      target="_blank"
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

      <div className="flex flex-col justify-center items-center my-5">
        <button className="btn btn-wide btn-outline btn-primary rounded-sm capitalize mr-2 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300">
          Load More Projects
        </button>
      </div>
    </div>
  );
};

export default Project;
