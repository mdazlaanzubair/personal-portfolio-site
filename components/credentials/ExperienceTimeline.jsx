"use client";

import { motion } from "framer-motion";

import { useExperienceContext } from "@/context/ExperienceContext";
import { GoTriangleRight as Bullet } from "react-icons/go";

const ExperienceTimeline = () => {
  const { experiences, sortExperiences } = useExperienceContext();
  const sortedExperiences = sortExperiences(experiences);

  return (
    <ul className="relative w-full p-5 flex flex-col">
      <motion.h2
        initial={{ opacity: 0, translateY: -10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-xl md:text-2xl lg:text-3xl tracking-tight font-black text-neutral-content mb-8 lg:mb-10"
      >
        Placements
      </motion.h2>

      {sortedExperiences?.map((experience, index) => (
        <li
          key={index}
          className="relative pb-10 flex flex-col border-l-4 border-primary"
        >
          <span className="absolute -top-1 -left-2.5 inline-block text-base text-base-100 bg-primary p-1 rounded-full">
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
              />
              <path
                fill="#fff"
                d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
              />
            </svg>
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
            className="absolute -top-2 left-5 badge badge-primary font-bold text-xs rounded-sm z-20"
          >
            {experience.from + " - " + experience.to}
          </motion.span>
          <div className="flex flex-col p-5 ml-5 mt-5 shadow bg-dark">
            <motion.h1
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              className="text-sm lg:text-base font-black"
            >
              {experience.title}{" "}
              <motion.span
                initial={{ opacity: 0, translateX: -10 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                className="text-primary"
              >
                @{experience.company}
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              className="text-xs lg:text-sm font-semibold"
            >
              {experience.type}
            </motion.h2>
            <ul className="my-3 hidden lg:flex flex-col gap-3">
              {experience.tasks.map((task, index) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  key={index}
                  className="flex flex-row justify-between items-start gap-3"
                >
                  <motion.span
                    initial={{ opacity: 0, translateX: 10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                    className="shrink text-xs text-primary"
                  >
                    <Bullet />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                    className="grow text-xs leading-normal tracking-wider"
                  >
                    {task}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              {experience.skills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  key={index}
                  className="badge badge-primary rounded-sm"
                >
                  <span className="text-xs font-bold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTimeline;
