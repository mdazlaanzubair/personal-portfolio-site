import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GoTriangleRight as Bullet } from "react-icons/go";

const ExperienceTab = ({ activeExperience }) => {
  return activeExperience && Object.keys(activeExperience).length > 0 ? (
    <div className="card bg-transparent rounded-sm shadow-xl">
      <div className="card-body">
        <h1 className="font-semibold text-lg">
          {activeExperience.fields.title}{" "}
          <span className="text-primary">
            @ {activeExperience.fields.company}
          </span>
        </h1>
        <h2 className="font-medium text-xs text-neutral-content tracking-widest">
          {activeExperience.fields.period.from} -{" "}
          {activeExperience.fields.period.to}
        </h2>
        <div className="my-3 text-sm leading-relaxed tracking-wider">
          {documentToReactComponents(activeExperience.fields.description)}
        </div>
        <h3 className="font-semibold text-sm mb-3">Contributions:</h3>
        <ul className="mb-3">
          {activeExperience.fields.tasks.map((task, index) => (
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
          {activeExperience.fields.skills.map((skill, index) => (
            <div key={index} className="badge badge-primary">
              <span className="text-xs font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default ExperienceTab;
