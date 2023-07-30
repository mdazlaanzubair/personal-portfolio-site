import { GoTriangleRight as Bullet } from "react-icons/go";

const ExperienceCard = ({ recentExperience }) => {
  return (
    recentExperience &&
    Object.keys(recentExperience).length > 0 && (
      <div className="card rounded-sm">
        <div className="card-body pl-0">
          <h1 className="font-semibold text-lg">
            {recentExperience.title}{" "}
            <span className="text-primary">@ {recentExperience.company}</span>
          </h1>
          <h2 className="font-medium text-xs text-neutral-content tracking-widest">
            {recentExperience.from} - {recentExperience.to} -{" "}
            <div className="badge badge-primary rounded-sm">
              <span className="text-xs font-bold">{recentExperience.type}</span>
            </div>
          </h2>
          <h3 className="font-semibold text-sm mb-3">Contributions:</h3>
          <ul className="my-3">
            {recentExperience.tasks.map((task, index) => (
              <li
                key={index}
                className="flex flex-row justify-between items-start gap-3 my-2"
              >
                <span className="shrink text-xs text-primary">
                  <Bullet />
                </span>
                <span className="grow text-xs leading-normal tracking-wider">
                  {task}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-row flex-wrap gap-2 items-center">
            {recentExperience.skills.map((skill, index) => (
              <div key={index} className="badge badge-primary rounded-sm">
                <span className="text-xs font-bold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ExperienceCard;
