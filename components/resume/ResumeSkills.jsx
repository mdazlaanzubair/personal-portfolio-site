const ResumeSkills = () => {
  const skills = [
    {
      title: "Frontend",
      abilities: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Tailwind CSS",
        "Vue JS",
        "React JS",
        "Next JS",
      ],
    },
    {
      title: "Backend",
      abilities: [
        "Express JS",
        "Next JS",
        "Flask",
        "Node JS",
        "PHP",
        "Python",
        "C++",
      ],
    },
    {
      title: "Databases",
      abilities: ["SQL", "Mongo DB", "Firebase", "Supabase", "Mongo DB Atlas"],
    },
    {
      title: "Generic",
      abilities: [
        "Layouts",
        "Prototyping",
        "MVC",
        "OOP",
        "Problem Solving",
        "Formal Writing",
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items- font-medium p-3">
      <h1 className="text-2xl font-black mb-5">Skills</h1>
      <div className="grid grid-cols-2 justify- gap-3">
        {skills.map((skill, index) => {
          const { title, abilities } = skill;

          return (
            <div
              key={index}
              className={`card rounded-sm ${
                title === "Generic" || title === "Frontend"
                  ? "col-span-1"
                  : "col-span-1"
              }`}
            >
              <div className="card-body p-3">
                <h2 className="text-sm font-black">{title}</h2>
                <ul className="flex flex-wrap flex-row gap-1 items-center justify-start">
                  {abilities.map((ability, index) => (
                    <li
                      key={index}
                      className="text-xs font-semibold px-3 bg-dark"
                    >
                      {ability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeSkills;
