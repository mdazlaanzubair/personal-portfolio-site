"use client";

import { motion } from "framer-motion";

import Button from "../Button";
import ExperienceCard from "./ExperienceCard";
import { useExperienceContext } from "@/context/ExperienceContext";

const Experience = () => {
  const { recentExperience } = useExperienceContext();

  return (
    <div
      id="experience-section"
      className="flex flex-col lg:flex-row min-h-screen gap-5 justify-start px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="w-full grid grid-cols-1 mt-5 gap-5 justify-start my-5">
        <div className="flex flex-col w-full">
          <motion.h3
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-primary font-bold tracking-widest mb-3 px-1"
          >
            Placements
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
          >
            Experience<span className="text-primary">.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-3"
          >
            Here is where I&apos;m recently deployed.
          </motion.h2>
          <ExperienceCard recentExperience={recentExperience} />

          <motion.div
            initial={{ opacity: 0, scale: -1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <Button
              type={"btn"}
              link={"/credentials"}
              text={"View credentials"}
              active_nav_title={"Credentials"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
