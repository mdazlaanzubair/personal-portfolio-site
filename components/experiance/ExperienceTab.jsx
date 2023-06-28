import useExperienceStore from "@/store/ExperienceStore";
import { GoTriangleRight as ListIcon } from "react-icons/go";

const ExperienceTab = () => {
  const activeExperience = useExperienceStore(
    (state) => state.activeExperience
  );

  return activeExperience ? (
    <div className="card bg-transparent rounded-sm shadow">
      <div className="card-body">
        <h1 className="font-semibold text-lg">
          {activeExperience.title}{" "}
          <span className="text-primary">@ {activeExperience.company}</span>
        </h1>
        <h2 className="font-medium text-xs text-neutral-content tracking-widest">
          {activeExperience.date.from} - {activeExperience.date.to}
        </h2>
        <ul className="list-none my-3">
          {activeExperience.tasks.map((task, index) => (
            <li key={index} className="flex flex-row py-3 gap-3 items-start">
              <span className="text-primary text-sm">
                <ListIcon />
              </span>
              <span className="text-xs">{task}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-row flex-wrap gap-2 items-center">
          {activeExperience.skills.map((skill, index) => (
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
