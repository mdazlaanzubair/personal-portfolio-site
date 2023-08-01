import { motion } from "framer-motion";

import Link from "next/link";

const FeaturedProject = ({ url, title, desc, imgUrl, skills, index }) => {
  return (
    <Link href={url} target="_blank" className="group">
      <motion.div
        initial={{ opacity: 0, translateX: 10, translateY: 10 }}
        whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
        className="card rounded-sm bg-dark shadow group-hover:shadow-xl transition-all ease-in-out duration-300"
      >
        <div className="card-body">
          <motion.img
            initial={{ opacity: 0, translateX: 10, translateY: 10 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
            src={"https:" + imgUrl}
            alt="featured project"
            className="w-full"
          />
          <div className="details mt-10">
            <motion.h2
              initial={{ opacity: 0, translateX: 10, translateY: 10 }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              className="text-base lg:text-xl font-bold mb-3"
            >
              {title}
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, translateX: 10, translateY: 10 }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
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
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedProject;
