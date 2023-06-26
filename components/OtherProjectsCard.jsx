import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

const OtherProjectsCard = ({ project }) => {
  return (
    <div className="card rounded-sm shadow-xl hover:shadow-base-200 hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300">
      <div className="card-body">
        <div className="w-full flex flex-row items-center justify-between mb-5">
          <span className="inline-block text-primary text-5xl">
            <CiFolderOn />
          </span>
          <div className="flex flex-row justify-center items-center">
            <a
              href={project.url}
              className="btn btn-ghost hover:bg-transparent text-xl text-navy-slate hover:text-primary btn-circle"
              target="_blank"
            >
              <FiExternalLink />
            </a>
            <a
              href={project.code}
              className="btn btn-ghost mr-3 hover:bg-transparent text-xl text-navy-slate hover:text-primary btn-circle"
              target="_blank"
            >
              <BiCodeAlt />
            </a>
          </div>
        </div>
        <h2 className="card-title">{project.title}</h2>
        <p className="text-xs font-normal mb-3">{project.desc}</p>
        <div className="flex flex-row flex-wrap items-center">
          {project.tech.map((skill, index) => (
            <div key={index} className="text-primary mr-3">
              <span className="text-xs font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjectsCard;
