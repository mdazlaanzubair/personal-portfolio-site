"use client";

import useExperienceStore from "@/store/ExperienceStore";
import { useEffect } from "react";

const ExperienceTabBtn = () => {
  const experiences = useExperienceStore((state) => state.experiences);
  const activeExperience = useExperienceStore(
    (state) => state.activeExperience
  );

  const setActiveExperience = useExperienceStore(
    (state) => state.setActiveExperience
  );

  useEffect(() => setActiveExperience(experiences[0]), []);

  return (
    <ul className="menu menu-horizontal w-full">
      {experiences?.map((experience, index) => (
        <li
          key={index}
          className={`group border-b-2 text-xs lg:text-base ${
            activeExperience.id === experience.id
              ? "border-primary"
              : "border-neutral-content hover:border-base-content"
          }`}
          onClick={() => setActiveExperience(experience)}
        >
          <a
            className={`rounded-sm font-medium py-3 group-hover:bg-transparent ${
              activeExperience.id === experience.id
                ? "text-primary group-hover:text-primary"
                : "text-neutral-content group-hover:text-base-content"
            }`}
          >
            {experience.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTabBtn;
