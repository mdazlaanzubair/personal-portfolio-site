import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useExperienceStore = create(
  devtools((set) => ({
    experiences: [
      {
        id: 1,
        title: "IT Assistant",
        company: "Federal Govt.",
        job_type: "Contract",
        date: { from: "Feb 2020", to: "Present" },
        tasks: [
          "Data management of procurement records, insights generation, and retrieval of documents on request.",
          "Optimize website and software on users' issues and queries.",
          "Analyze and propose technical solutions based on users' needs and requirements.",
          "Provide guidance and training to users.",
          "Administrate, support, and monitor databases by proactively resolving database and server issues.",
        ],
        skills: [
          "Web Development",
          "Documentation",
          "Content Writing",
          "Microsoft Office",
        ],
      },
      {
        id: 2,
        title: "Ghost Designer",
        company: "Famespark",
        job_type: "Contract",
        date: { from: "Jul 2019", to: "Feb 2020" },
        tasks: [
          "Design user interface to meet client specifications and briefs.",
          "Copywriting and designing images to craft website content.",
          "Worked closely with UX and product teams to define visually appealing but functional requirements.",
          "Conduct live user testing of components and functionality to evaluate the effectiveness of designs and enhancements.",
          "Used wireframes, mock-ups, and prototypes to establish user interface design and architecture.",
        ],
        skills: [
          "Web Design",
          "Responsive Web Design",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "User Experience (UX)",
        ],
      },
      {
        id: 3,
        title: "Jr. Developer",
        company: "Famespark",
        job_type: "Internship",
        date: { from: "Dec 2018", to: "May 2019" },
        tasks: [
          "Developed new user-facing features using React.js",
          "Building reusable components and front-end libraries for future use",
          "Translating designs and wireframes into high-quality code",
          "Optimizing components for maximum performance across a vast array of web-capable devices and browsers",
          "Contributed to the company's custom-made component library",
        ],
        skills: ["Web Development", "JSON", "JavaScript", "Git"],
      },
    ],

    activeExperience: {},

    setActiveExperience: (experience) => set({ activeExperience: experience }),
  }))
);

export default useExperienceStore;
