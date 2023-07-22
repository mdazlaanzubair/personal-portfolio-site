"use client";

import Button from "../Button";
import ExperienceCard from "./ExperienceCard";
import { useExperienceContext } from "@/context/ExperienceContext";

const Experience = () => {
  const { recentExperience } = useExperienceContext();

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
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-3">
            Here is where I&apos;m recently deployed.
          </h2>
          <ExperienceCard recentExperience={recentExperience} />

          <div className="flex items-center justify-center">
            <Button
              type={"btn"}
              link={"/credentials"}
              text={"View credentials"}
              active_nav_title={"Credentials"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
