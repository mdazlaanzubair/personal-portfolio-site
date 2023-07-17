import { FiExternalLink as LiveViewIcon } from "react-icons/fi";

const FeaturedProject = ({ url, title, desc, imgUrl, skills }) => {
  return (
    <div className="group relative card rounded-sm bg-base-100">
      <div className="card-body rounded-sm shadow group-hover:shadow-xl transition-all ease-in-out duration-300">
        <a href={url} target="_blank">
          <img src={"https:" + imgUrl} alt="Shoes" className="w-full" />
        </a>
        <div className="details mt-10">
          <h2 className="text-base lg:text-xl font-bold mb-3">{title}</h2>
          <p className="text-xs lg:text-sm">{desc}</p>
          <div className="flex flex-row flex-wrap gap-5 items-center">
            {skills.map((skill, index) => (
              <div key={index} className="text-primary">
                <span className="text-xs font-semibold">{skill}</span>
              </div>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            className="absolute top-2 right-2 group btn btn-ghost btn-circle border-none text-xl hover:text-primary hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <LiveViewIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
