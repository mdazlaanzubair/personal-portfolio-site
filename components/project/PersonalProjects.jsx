import ProjectCard from "./ProjectCard";

const PersonalProjects = ({ personalProjects, showMore, setShowMore }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items- my-10">
      <div className="card bg-transparent rounded-sm">
        <div className="card-body lg:text-right">
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
            Interested in exploring my personal.
          </h2>
          <a
            href="#about-section"
            className="group text-primary font-semibold leading-loose"
          >
            <span className="relative overflow-x-hidden inline-flex">
              View the archive
              <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
            </span>
          </a>
        </div>
      </div>
      {personalProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="card bg-transparent rounded-sm">
        <div className="card-body">
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
            Are you interested in exploring more.
          </h2>
          <button
            type="button"
            className="group text-primary font-semibold text-left w-1/2"
            onClick={() => setShowMore(!showMore)}
          >
            <span className="relative overflow-x-hidden inline-flex">
              {showMore ? "Show less" : "Show more"}
              <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
