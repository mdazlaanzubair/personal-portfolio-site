"use client";

import epakaiImg from "@/public/featured_projects/epakai.png";
import analyticsmartImg from "@/public/featured_projects/analyticsmart.png";
import jomrunImg from "@/public/featured_projects/jomrun.png";
import FeaturedProject from "./FeaturedProjects";
import OtherProjectsCard from "./ProjectCard";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useProjectContext } from "@/context/ProjectContext";
import PersonalProjects from "./PersonalProjects";

const Project = () => {
  const {
    featuredProjects,
    setFeaturedProjects,
    personalProjects,
    setPersonalProjects,
    showMore,
    setShowMore,
  } = useProjectContext();

  useEffect(() => {
    // list of fetched projects
    const fetched_projects = [
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

    // setting featured projects
    setFeaturedProjects(
      fetched_projects.filter((project) => project.type === "Featured")
    );

    // setting personal projects conditionally
    const personal_projects = fetched_projects.filter(
      (project) => project.type === "Personal"
    );

    // if "showMore" is true - list all personal_projects
    if (showMore) setPersonalProjects(personal_projects);

    // if "showMore" is false - list half of personal_projects
    if (!showMore) {
      setPersonalProjects([
        ...personal_projects.slice(0, personal_projects.length / 2),
      ]);
    }
  }, [showMore]);

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
        personalProjects={personalProjects}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </div>
  );
};

export default Project;
