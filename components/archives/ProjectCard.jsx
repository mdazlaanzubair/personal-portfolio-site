import { motion } from "framer-motion";

import Link from "next/link";
import { BiLinkExternal as LiveLink } from "react-icons/bi";
import { HiCode as SourceLink } from "react-icons/hi";
import { FaFolder as Folder } from "react-icons/fa";

const ProjectCard = ({ url, title, desc, imgUrl, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 10, translateY: 10 }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
      className="card group bg-dark rounded-sm shadow hover:shadow-xl transition-all ease-in-out duration-300"
    >
      <div className="card-body justify-stretch">
        <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
            className="text-3xl lg:text-6xl mb-5"
          >
            <Folder />
          </motion.span>
          <div className="flex flex-row justify-end items-center">
            {url && url.length > 0 && (
              <Link
                href={url}
                className="p-3 text-xl hover:text-primary hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
                target="_blank"
              >
                <motion.span
                  initial={{ opacity: 0, translateX: -10, translateY: 10 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <LiveLink />
                </motion.span>
              </Link>
            )}
            {url && url.length > 0 && (
              <Link
                href={url}
                className="p-3 text-xl hover:text-primary hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
                target="_blank"
              >
                <motion.span
                  initial={{ opacity: 0, translateX: -10, translateY: 10 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <SourceLink />
                </motion.span>
              </Link>
            )}
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
          className="text-base lg:text-xl font-bold mb-3"
        >
          {title}
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
          className="paragraph block text-xs lg:text-sm"
        >
          {desc}
        </motion.span>
        <div className="flex flex-row flex-wrap gap-1 justify-end items-center mt-5">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              key={index}
              className="badge badge-primary text-xs rounded-sm"
            >
              <span className="text-xs font-semibold">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
