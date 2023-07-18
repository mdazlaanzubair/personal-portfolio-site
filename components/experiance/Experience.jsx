"use client";

import ExperienceTab from "./ExperienceTab";
import ExperienceTabBtn from "./ExperienceTabBtn";
import { useExperienceContext } from "@/context/ExperienceContext";

const Experience = () => {
  const { experiences, activeExperience, setActiveExperience } =
    useExperienceContext();

  return (
    <div
      id="experience-section"
      className="flex flex-col lg:flex-row min-h-screen gap-5 justify-start shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="w-full grid grid-cols-1 mt-5 gap-5 justify-start my-5">
        <div className="flex flex-col w-full">
          <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
            Placements
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
            Experience<span className="text-primary">.</span>
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-5">
            Where I&apos;ve professionally worked.
          </h2>
          <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
            Here are some wonderful companies &amp; organizations I&apos;ve
            worked with.
          </p>
          <div className="flex flex-col max-w-full items-center justify-start">
            <ExperienceTabBtn
              experiences={experiences}
              activeExperience={activeExperience}
              setActiveExperience={setActiveExperience}
            />
            <ExperienceTab activeExperience={activeExperience} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
