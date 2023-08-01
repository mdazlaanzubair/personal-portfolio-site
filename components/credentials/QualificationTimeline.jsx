import { motion } from "framer-motion";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const QualificationTimeline = ({ qualifications }) => {
  return (
    <ul className="relative w-full lg:w-1/2 flex flex-col">
      <motion.h2
        initial={{ opacity: 0, translateY: -10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-xl md:text-2xl lg:text-3xl tracking-tight font-black text-neutral-content mb-8 lg:mb-10"
      >
        {qualifications[0].type === "Degree"
          ? "Qualifications"
          : "Certifications"}
      </motion.h2>
      {qualifications?.map((qualification, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.2 }}
          key={index}
          className={`relative pb-10 flex flex-col items-center border-primary ${
            qualification.type === "Degree" ? "border-l-4" : "border-r-4"
          }`}
        >
          <span
            className={`absolute -top-1 inline-block text-base text-base-100 bg-primary p-1 rounded-full ${
              qualification.type === "Degree" ? "-left-2.5" : "-right-2.5"
            }`}
          >
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
          <span
            className={`absolute -top-2 right-5 badge badge-primary font-bold text-xs rounded-sm z-20 ${
              qualification.type === "Degree" ? "left-5" : "right-5"
            }`}
          >
            {qualification.from !== "null"
              ? qualification.from + " - " + qualification.to
              : qualification.to}
          </span>
          <div
            className={`flex flex-col p-5 mt-5 shadow bg-base-100  ${
              qualification.type === "Degree" ? "ml-5" : "mr-5"
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-sm lg:text-base font-black"
            >
              {qualification.title}{" "}
              <Link
                href={qualification.url}
                target="_blank"
                className="text-primary"
              >
                <motion.span
                  initial={{ opacity: 0, translateY: -10 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  @{qualification.institute}
                </motion.span>
              </Link>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-xs lg:text-sm font-semibold"
            >
              {qualification.field}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="my-5 text-xs lg:text-sm font-medium"
            >
              {documentToReactComponents(qualification.description)}
            </motion.div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default QualificationTimeline;
