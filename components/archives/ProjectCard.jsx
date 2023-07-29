import Link from "next/link";
import { BiLinkExternal as LiveLink } from "react-icons/bi";
import { HiCode as SourceLink } from "react-icons/hi";
import { FaFolder as Folder } from "react-icons/fa";

const ProjectCard = ({ url, title, desc, imgUrl, skills }) => {
  return (
    <div className="card group bg-dark rounded-sm shadow hover:shadow-xl transition-all ease-in-out duration-300">
      <div className="card-body justify-stretch">
        <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
          <span className="text-3xl lg:text-6xl mb-5">
            <Folder />
          </span>
          <div className="flex flex-row justify-end items-center">
            {url && url.length > 0 && (
              <Link
                href={url}
                className="p-3 text-xl hover:text-primary hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
                target="_blank"
              >
                <LiveLink />
              </Link>
            )}
            {url && url.length > 0 && (
              <Link
                href={url}
                className="p-3 text-xl hover:text-primary hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
                target="_blank"
              >
                <span>
                  <SourceLink />
                </span>
              </Link>
            )}
          </div>
        </div>
        <h2 className="text-base lg:text-xl font-bold mb-3">{title}</h2>
        <span className="paragraph block text-xs lg:text-sm">{desc}</span>
        <div className="flex flex-row flex-wrap gap-1 justify-end items-center mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="badge badge-primary text-xs rounded-sm">
              <span className="text-xs font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
