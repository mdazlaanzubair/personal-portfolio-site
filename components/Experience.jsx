"use client";

import { GoTriangleRight as ListIcon } from "react-icons/go";

import Animator from "./Animator";
import * as about_animation from "../public/skills_animation.json";
import { useState } from "react";

const Experience = () => {
  const [activeExpId, setActiveExpId] = useState(0);

  const experiences = [
    {
      title: "IT Assistant",
      company: "Federal Govt.",
      job_type: "Contract",
      date: { from: "Feb 2020", to: "Present" },
      tasks: [
        "Data management of procurement records, insights generation, and retrieval of documents on request.",
        "Optimize website and software on users' issues and queries.",
        "Analyze and propose technical solutions based on users' needs and requirements.",
        "Provide guidance and training to users.",
        "Administrate, support, and monitor databases by proactively resolving database and server issues.",
      ],
      skills: [
        "Web Development",
        "Documentation",
        "Content Writing",
        "Microsoft Office",
      ],
    },
    {
      title: "Ghost Designer",
      company: "Famespark",
      job_type: "Contract",
      date: { from: "Jul 2019", to: "Feb 2020" },
      tasks: [
        "Design user interface to meet client specifications and briefs.",
        "Copywriting and designing images to craft website content.",
        "Worked closely with UX and product teams to define visually appealing but functional requirements.",
        "Conduct live user testing of components and functionality to evaluate the effectiveness of designs and enhancements.",
        "Used wireframes, mock-ups, and prototypes to establish user interface design and architecture.",
      ],
      skills: [
        "Web Design",
        "Responsive Web Design",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "User Experience (UX)",
      ],
    },
    {
      title: "Jr. Developer",
      company: "Famespark",
      job_type: "Internship",
      date: { from: "Dec 2018", to: "May 2019" },
      tasks: [
        "Developed new user-facing features using React.js",
        "Building reusable components and front-end libraries for future use",
        "Translating designs and wireframes into high-quality code",
        "Optimizing components for maximum performance across a vast array of web-capable devices and browsers",
        "Contributed to the company's custom-made component library",
      ],
      skills: ["Web Development", "JSON", "JavaScript", "Git"],
    },
  ];

  return (
    <div
      id="experience-section"
      className="flex flex-col lg:flex-row min-h-screen gap-5 px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <div className="w-full flex flex-col lg:flex-row mt-5 gap-5 justify-center my-5">
        <div className="flex flex-col shrink">
          <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Placements
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Experience
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-5">
            Where I&apos;ve worked.
          </h2>
          <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
            Here are some wonderful companies and organizations I&apos;ve worked
            with.
          </p>
        </div>
        <div className="flex flex-col grow">
          <ul className="menu menu-horizontal w-full mb-5">
            {experiences.map((job, index) => (
              <li
                key={index}
                className={`group border-b-2 text-xs lg:text-base ${
                  activeExpId === index
                    ? "border-primary"
                    : "border-neutral-content hover:border-base-content"
                }`}
                onClick={() => setActiveExpId(index)}
              >
                <a
                  className={`rounded-sm font-medium py-3 group-hover:bg-transparent ${
                    activeExpId === index
                      ? "text-primary group-hover:text-primary"
                      : "text-neutral-content group-hover:text-base-content"
                  }`}
                >
                  {job.title}
                </a>
              </li>
            ))}
          </ul>
          <h1 className="font-semibold text-lg">
            {experiences[activeExpId].title}{" "}
            <span className="text-primary">
              @ {experiences[activeExpId].company}
            </span>
          </h1>
          <h2 className="font-medium text-xs text-neutral-content tracking-widest">
            {experiences[activeExpId].date.from} -{" "}
            {experiences[activeExpId].date.to}
          </h2>
          <ul className="list-none my-3">
            {experiences[activeExpId].tasks.map((task, index) => (
              <li key={index} className="flex flex-row py-3 gap-3 items-start">
                <span className="text-primary text-sm">
                  <ListIcon />
                </span>
                <span className="text-xs">{task}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-row flex-wrap gap-2 items-center">
            {experiences[activeExpId].skills.map((skill, index) => (
              <div key={index} className="badge badge-primary">
                <span className="text-xs font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
