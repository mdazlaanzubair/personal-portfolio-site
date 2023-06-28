"use client";

import epakaiImg from "@/public/featured_projects/epakai.png";
import analyticsmartImg from "@/public/featured_projects/analyticsmart.png";
import jomrunImg from "@/public/featured_projects/jomrun.png";
import FeaturedProjectCard from "./FeaturedProjectCard";
import OtherProjectsCard from "./ProjectCard";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const all_projects = [
    {
      title: "Epakai Commerce",
      desc: `Epakai.com is an online store that sells bathroom and kitchen accessories. The website was build for Pakai Industries Berhad, a Malaysian company that has been in the sanitaryware industry for over 30 years.\n\nThe website was build for a Malaysian client in 2019. The website accepts payments via credit card, PayPal, and bank transfer, has a 4.5 out of 5-star rating on Google Reviews.`,
      img: epakaiImg.src,
      url: "https://epakai.com/",
      code: "https://epakai.com/",
      type: "Featured",
      tech: ["wordpress", "php", "sql"],
    },
    {
      title: "Analyticsmart",
      desc: `Analyticsmart is a data analytics company that provides smart analytical services and solutions to businesses of all sizes.\n\nThe responsive website was made for a Canadian client in 2017. It's built on Wordpress and optimized for search engines.`,
      img: analyticsmartImg.src,
      url: "https://analyticsmart.com/",
      code: "https://analyticsmart.com/",
      type: "Featured",
      tech: ["wordpress", "php", "sql"],
    },
    {
      title: "JomRun",
      desc: "JomRun is a Southeast Asia-based running app that helps users find and register for running events. The website is built on a number of technologies, along with some third-party services, such as Google Maps and Facebook, to provide users with additional functionality. Jomrun is built on a number of reliable and scalable technologies, which ensures that it will be able to handle the growing number of users.",
      img: jomrunImg.src,
      url: "https://www.jomrun.com/",
      code: "https://www.jomrun.com/",
      type: "Featured",
      tech: ["html", "css", "javascript", "php", "MySQL"],
    },
    {
      title: "Wildfire Tracker",
      desc: `A basic implementation of Web GIS. This project is using the data that is coming from NASA's EONET API and plot it on Google Maps on their respective coordinated.`,
      img: "",
      url: "https://fire-tracking.vercel.app/",
      code: "https://github.com/mdazlaanzubair/fire-tracking",
      type: "Personal",
      tech: ["react js", "NASA API", "google maps"],
    },
    {
      title: "Promptare",
      desc: `A social media hub for Chat GPT users. Discover and share powerful prompts and commands to enhance your Chat GPT experience. `,
      img: "",
      url: "https://promptare.vercel.app/",
      code: "https://github.com/mdazlaanzubair/Promptare",
      type: "Personal",
      tech: ["next js", "next auth", "mongo db", "chat gpt"],
    },
    {
      title: "Covid-19 Visualizer",
      desc: `Web GIS project showcasing an interactive 3D visualization of COVID-19.`,
      img: "",
      url: "https://track-covid-19.vercel.app/",
      code: "https://github.com/mdazlaanzubair/Covid-3d",
      type: "Personal",
      tech: ["javascript", "snowpack", "three js"],
    },
  ];

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setPersonalProjects(
      all_projects.filter((project) => project.type === "Personal")
    );

    if (!showMore) {
      const show_less_projects = all_projects.filter(
        (project) => project.type === "Personal"
      );

      setPersonalProjects([
        ...show_less_projects.slice(0, show_less_projects.length / 2),
      ]);

      return;
    }
  }, [showMore]);

  useEffect(() => {
    setFeaturedProjects(
      all_projects.filter((project) => project.type === "Featured")
    );
  }, []);

  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        Client&apos;s Projects
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
        Portfolio
      </h1>
      <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-5">
        Let&apos;s sneak a peek at my work.
      </h2>
      <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
        Here is my short-listed work that I delivered to my clients and as well
        as my personal projects.
      </p>

      <div className="w-full flex flex-col gap-16 my-5 justify-center items-center">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={index} index={index} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items- my-10">
        <div className="card bg-transparent rounded-sm">
          <div className="card-body lg:text-right">
            <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
              Interested in exploring my personal.
            </h2>
            <a
              href="#about-section"
              className="group text-primary font-semibold leading-loose"
            >
              <span className="relative overflow-x-hidden inline-flex">
                View the archive
                <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
              </span>
            </a>
          </div>
        </div>
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <div className="card bg-transparent rounded-sm">
          <div className="card-body">
            <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
              Are you interested in exploring more.
            </h2>
            <button
              type="button"
              className="group text-primary font-semibold text-left w-1/2"
              onClick={() => setShowMore(!showMore)}
            >
              <span className="relative overflow-x-hidden inline-flex">
                {showMore ? "Hide" : "Show more"}
                <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
