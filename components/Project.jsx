"use client";

import { FiExternalLink as LiveViewIcon } from "react-icons/fi";

import epakaiImg from "@/public/featured_projects/epakai.png";
import analyticsmartImg from "@/public/featured_projects/analyticsmart.png";
import jomrunImg from "@/public/featured_projects/jomrun.png";
import FeaturedProjectCard from "./FeaturedProjectCard";
import OtherProjectsCard from "./OtherProjectsCard";

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

  const personal_projects = [
    {
      title: "Wildfire Tracker",
      desc: `A basic implementation of Web GIS. This project is using the data that is coming from NASA's EONET API and plot it on Google Maps on their respective coordinated.`,
      url: "https://fire-tracking.vercel.app/",
      tech: ["react js", "NASA API", "google maps"],
      code: "https://github.com/mdazlaanzubair/fire-tracking",
    },
    {
      title: "Promptare",
      desc: `A social media hub for Chat GPT users. Discover and share powerful prompts and commands to enhance your Chat GPT experience. `,
      url: "https://promptare.vercel.app/",
      tech: ["next js", "next auth", "mongo db", "chat gpt"],
      code: "https://github.com/mdazlaanzubair/Promptare",
    },
    {
      title: "Covid-19 Visualizer",
      desc: `Web GIS project showcasing an interactive 3D visualization of COVID-19.`,
      url: "https://track-covid-19.vercel.app/",
      tech: ["javascript", "snowpack", "three js"],
      code: "https://github.com/mdazlaanzubair/Covid-3d",
    },
  ];

  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        Client&apos;s Projects
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
      <div className="w-full flex flex-col gap-16 my-5 justify-center items-center">
        {featured_projects.map((project, index) => (
          <FeaturedProjectCard key={index} index={index} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items- my-10">
        <h2 className="text-center my-auto lg:text-left text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-5">
          Noteworthy Personal Projects.
        </h2>
        {personal_projects.map((project, index) => (
          <OtherProjectsCard key={index} project={project} />
        ))}
        <div className="card bg-transparent rounded-sm">
          <div className="card-body">
            <a
              href="#about-section"
              className="group text-primary font-semibold leading-loose my-auto"
            >
              <span className="relative overflow-x-hidden inline-flex">
                View the archive
                <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
