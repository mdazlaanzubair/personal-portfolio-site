"use client";

import ExperienceTab from "./ExperienceTab";
import ExperienceTabBtn from "./ExperienceTabBtn";
import { useExperienceContext } from "@/context/ExperienceContext";
import { useEffect } from "react";

const Experience = () => {
  const { experiences, activeExperience, setActiveExperience, setExperiences } =
    useExperienceContext();

  useEffect(() => {
    const fetchedExperiences = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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

    setExperiences(fetchedExperiences);
    setActiveExperience(fetchedExperiences[0]);
  }, []);

  return (
    <div
      id="experience-section"
      className="flex flex-col lg:flex-row min-h-screen gap-5 px-0 py-10 lg:px-10 lg:py-20 justify-start"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5 justify-start my-5">
        <div className="flex flex-col max-w-xl">
          <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Placements
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Experience
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-5">
            Where I&apos;ve professionally worked.
          </h2>
          <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
            Here are some wonderful companies &amp; organizations I&apos;ve
            worked with.
          </p>
          <ExperienceTabBtn
            experiences={experiences}
            activeExperience={activeExperience}
            setActiveExperience={setActiveExperience}
          />
        </div>
        <div className="flex flex-col">
          <ExperienceTab activeExperience={activeExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
