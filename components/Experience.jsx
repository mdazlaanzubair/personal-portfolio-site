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
      skills: ["Web Development", "React.js", "JSON", "JavaScript", "Git"],
    },
  ];

  return (
    <div
      id="experience-section"
      className="hero min-h-screen py-20 md:py-24 justify-start"
    >
      <div className="hero-content flex-col lg:flex-row lg:px-20">
        <div className="hidden lg:flex">
          <Animator animation={about_animation} />
        </div>
        <div className="w-full lg:max-w-xl">
          <h1 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Where I&apos;ve Worked
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
            Experience
          </h1>
          <h1 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-5">
            Where I&apos;ve worked.
          </h1>
          <p className="mb-5 font-light leading-loose text-navy-slate w-full md:max-w-2xl text-xs md:text-base">
            I offer services to cater to your specific requirements. Whether
            you&apos;re a small business owner, entrepreneur, or individual
            looking to establish your online presence, I have the expertise to
            deliver exceptional results.
          </p>

          <div className="flex flex-col gap-5 mt-5 justify-start">
            <ul className="menu menu-horizontal w-full shrink">
              {experiences.map((job, index) => (
                <li
                  key={index}
                  className={`group border-b-2 text-xs lg:text-base ${
                    activeExpId === index
                      ? "border-primary"
                      : "border-navy-slate-dark hover:border-navy-slate-light"
                  }`}
                  onClick={() => setActiveExpId(index)}
                >
                  <a
                    className={`rounded-sm font-medium py-3 group-hover:bg-transparent ${
                      activeExpId === index
                        ? "text-primary group-hover:text-primary"
                        : "text-navy-slate-dark group-hover:text-navy-slate-light"
                    }`}
                  >
                    {job.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-5 grow">
              <h1 className="font-semibold text-lg">
                {experiences[activeExpId].title}{" "}
                <span className="text-primary">
                  @ {experiences[activeExpId].company}
                </span>
              </h1>
              <h2 className="font-medium text-xs text-navy-slate-dark tracking-widest -mt-3">
                {experiences[activeExpId].date.from} -{" "}
                {experiences[activeExpId].date.to}
              </h2>
              <ul className="list-none">
                {experiences[activeExpId].tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex flex-row py-3 gap-3 items-start"
                  >
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
      </div>
    </div>
  );
};

export default Experience;
