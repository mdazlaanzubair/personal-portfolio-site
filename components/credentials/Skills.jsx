import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      abilities: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Tailwind CSS",
        "Vue JS",
        "React JS",
        "Next JS",
      ],
    },
    {
      title: "Backend",
      abilities: [
        "Express JS",
        "Next JS",
        "Flask",
        "Node JS",
        "PHP",
        "Python",
        "C++",
      ],
    },
    {
      title: "Databases",
      abilities: ["SQL", "Mongo DB", "Firebase", "Supabase", "Mongo DB Atlas"],
    },
    {
      title: "Content Management",
      abilities: ["WordPress", "Contentful", "Sanity"],
    },
    {
      title: "Generic",
      abilities: [
        "Layouts",
        "Prototyping",
        "MVC",
        "OOP",
        "Problem Solving",
        "Formal Writing",
        "Documentation",
      ],
    },
  ];

  return (
    <div className="flex flex-col px-5 lg:px-16 py-5 lg:py-16 gap-5">
      <div className="w-full">
        <motion.h3
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold tracking-widest mb-3 px-1"
        >
          Abilities &amp; Capabilities
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
        >
          Skills<span className="text-primary">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content"
        >
          I am a digital chameleon.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
        {skills.map((skill, index) => {
          const { title, abilities } = skill;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              key={index}
              className={`group relative w-full px-5 py-10 flex flex-col justify-center bg-base-100 shadow ${
                title === "Generic" || title === "Frontend"
                  ? "col-span-1 lg:col-span-3"
                  : "col-span-1"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark group-hover:opacity-0 transition-all ease-in-out duration-300 cursor-pointer">
                <h1 className="text-2xl font-black text-center">{title}</h1>
              </div>
              <div className="flex flex-wrap gap-3 justify-center my-auto mx-auto">
                {abilities.length > 0 &&
                  abilities.map((ability, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                        key={index}
                        className="stat-desc lg:p-3 badge badge-md badge-primary font-bold rounded-sm mr-1 mb-1"
                      >
                        {ability}
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
