import { motion } from "framer-motion";

import { GoTriangleRight as Bullet } from "react-icons/go";

const ExperienceCard = ({ recentExperience }) => {
  return (
    recentExperience &&
    Object.keys(recentExperience).length > 0 && (
      <div className="card rounded-sm">
        <div className="card-body pl-0">
          <motion.h1
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="font-semibold text-lg"
          >
            {recentExperience.title}{" "}
            <motion.span
              initial={{ opacity: 0, translateX: 10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-primary"
            >
              @ {recentExperience.company}
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, translateX: 10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="font-medium text-xs text-neutral-content tracking-widest"
          >
            {recentExperience.from} - {recentExperience.to} -{" "}
            <div className="badge badge-primary rounded-sm">
              <span className="text-xs font-bold">{recentExperience.type}</span>
            </div>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="font-semibold text-sm"
          >
            Contributions:
          </motion.h3>
          <ul className="my-3">
            {recentExperience.tasks.map((task, index) => (
              <li
                key={index}
                className="flex flex-row justify-between items-start gap-3 my-2"
              >
                <motion.span
                  initial={{ opacity: 0, translateX: -10 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  className="shrink text-xs text-primary"
                >
                  <Bullet />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, translateX: 10 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  className="grow text-xs leading-normal tracking-wider"
                >
                  {task}
                </motion.span>
              </li>
            ))}
          </ul>

          <div className="flex flex-row flex-wrap gap-2 items-center">
            {recentExperience.skills.map((skill, index) => (
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
      </div>
    )
  );
};

export default ExperienceCard;
