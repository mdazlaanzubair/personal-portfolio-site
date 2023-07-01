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
        </div>
        <div className="flex flex-col items-center justify-end">
          <ExperienceTabBtn
            experiences={experiences}
            activeExperience={activeExperience}
            setActiveExperience={setActiveExperience}
          />
          <ExperienceTab activeExperience={activeExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
