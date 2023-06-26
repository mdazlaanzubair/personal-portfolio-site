import { FiExternalLink as LiveViewIcon } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

function FeaturedProjectCard({ project, index }) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 lg:my-5 lg:gap-0 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <a
        href={project.url}
        target="_blank"
        className="group w-full lg:w-3/4 relative"
      >
        <div className="bg-base-100 shadow-2xl -z-10">
          <img
            className="w-full h-full object-cover mix-blend-color-dodge opacity-75 hover:opacity-1 hover:mix-blend-normal transition-all ease-in-out duration-1000"
            src={project.img}
            alt="featured project image"
          />
        </div>
      </a>
      <div
        className={`w-full lg:w-1/2 flex flex-col justify-end z-10 ${
          index % 2 === 0
            ? "text-right lg:-ml-16 items-end"
            : "lg:-mr-16 items-start"
        }`}
      >
        <h1 className="text-2xl font-bold mb-5 text-navy-slate-light">
          {project.title}
        </h1>
        <p className="py-5 lg:p-5 bg-base-100 rounded-sm text-sm lg:shadow-lg">
          {project.desc}
        </p>
        <div className="flex flex-row flex-wrap gap-5 items-center">
          {project.tech.map((skill, index) => (
            <div key={index} className="text-primary">
              <span className="text-xs font-semibold">{skill}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-center">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className="group btn btn-ghost btn-circle border-none text-xl hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <span className="text-navy-slate-light group-hover:text-primary">
                <LiveViewIcon />
              </span>
            </a>
          ) : null}

          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              className="group btn btn-ghost btn-circle border-none text-xl hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <span className="text-navy-slate-light group-hover:text-primary">
                <BiCodeAlt />
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
