const ExperienceTabBtn = ({
  experiences,
  activeExperience,
  setActiveExperience,
}) => {
  return experiences && experiences.length > 0 ? (
    <div className="flex flex-row flex-wrap items-center justify-start mr-auto">
      {experiences.map((experience, index) => (
        <button
          type="button"
          key={index}
          className={`btn btn-sm rounded-sm ${
            activeExperience.sys.id === experience.sys.id
              ? "btn-primary"
              : "btn-ghost"
          }`}
          onClick={() => setActiveExperience(experience)}
        >
          {experience.fields.period.to === "Present"
            ? "Recent"
            : `Job ${index}.`}
        </button>
      ))}
    </div>
  ) : null;
};

export default ExperienceTabBtn;
