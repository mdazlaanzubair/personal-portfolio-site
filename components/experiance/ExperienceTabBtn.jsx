const ExperienceTabBtn = ({
  experiences,
  activeExperience,
  setActiveExperience,
}) => {
  return experiences && experiences.length > 0 ? (
    <div className="tabs tabs-boxed bg-opacity-30 ml-auto">
      {experiences.map((experience, index) => (
        <a
          key={index}
          className={`tab tab-border ${
            activeExperience.sys.id === experience.sys.id
              ? "border-primary tab-active"
              : ""
          }`}
          onClick={() => setActiveExperience(experience)}
        >
          {experience.fields.period.to === "Present"
            ? "Recent"
            : `Job ${index}.`}
        </a>
      ))}
    </div>
  ) : null;
};

export default ExperienceTabBtn;
