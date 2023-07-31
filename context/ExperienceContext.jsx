"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ExperienceContext = createContext({});

export const useExperienceContext = () => useContext(ExperienceContext);

const ExperienceContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [experiences, setExperiences] = useState([
    {
      title: "IT Assistant",
      company: "Federal Govt.",
      type: "Contract",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "I joined the ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Federal Government",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " as an ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "IT Assistant",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value:
                  " and effectively manage procurement records, optimized website/software, and propose technical solutions. Provide guidance/training, resolve database/server issues, and excel in web development, documentation, content writing, and Microsoft Office.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      tasks: [
        "Data management of procurement records, insights generation, and retrieval of documents on request.",
        "Optimize website and software on users' issues and queries.",
        "Analyze and propose technical solutions based on users' needs and requirements.",
        "Provide guidance and training to users",
        "Administrate, support, and monitor databases by proactively resolving database and server issues.",
      ],
      skills: [
        "Web Development",
        "Documentation",
        "Content Writing",
        "Microsoft Office",
      ],
      to: "Present",
      from: "Feb 2020",
    },
    {
      title: "Jr. Developer",
      company: "Famespark",
      type: "Internship",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "During my ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Jr. Developer Internship ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: "at ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Famespark",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value:
                  ", I excelled in React.js, web development, JSON, JavaScript, and Git. I built reusable components, translated designs to pixel-perfect code, and optimized performance across devices. I actively contributed to the company's component library, fostering reusability and streamlining development processes.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      tasks: [
        "Developed new user-facing features using React.js, enhancing the functionality and user experience of web applications.",
        "Built reusable components and front-end libraries, ensuring efficient development and easy maintenance of code for future projects.",
        "Translated designs and wireframes into high-quality code, bringing visual concepts to life with attention to detail and adherence to coding best practices.",
        "Optimized components for maximum performance across a wide range of web-capable devices and browsers, ensuring smooth and seamless user interactions.",
        "Contributed to the company's custom-made component library, fostering code reusability and accelerating development processes.",
      ],
      skills: ["Web Development", "HTML/CSS", "Javascript", "JSON", "Git"],
      to: "May 2019",
      from: "Dec 2018",
    },
    {
      title: "Ghost Designer",
      company: "Famespark",
      type: "Freelance",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "As a ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Ghost Designer",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " at ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Famespark",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value:
                  ", I created visually stunning interfaces meeting client requirements. With expertise in web design, responsive design, Adobe tools, and UX, I crafted captivating websites. Collaborating with UX teams, I defined functional requirements and conducted live user testing for effective designs. Utilizing wireframes and prototypes, I ensured cohesive and intuitive experiences.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      tasks: [
        "Designed user interfaces that aligned with client specifications and briefs, ensuring visually captivating and user-friendly websites.",
        "Crafted website content by combining copywriting skills with image designing, resulting in engaging and compelling online experiences.",
        "Collaborated closely with UX and product teams to define visually appealing yet functional requirements, incorporating user-centered design principles.",
        "Conducted live user testing of components and functionality to evaluate the effectiveness of designs and identify areas for improvements.",
        "Utilized wireframes, mock-ups, and prototypes to establish a solid foundation for user interface design and architecture.",
      ],
      skills: [
        "Responsive Web Designs",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "User Experience (UX)",
        "User Interface (UI)",
      ],
      to: "Feb 2020",
      from: "Jul 2019",
    },
  ]);
  const [recentExperience, setRecentExperience] = useState({
    title: "IT Assistant",
    company: "Federal Govt.",
    type: "Contract",
    description: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "I joined the ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Federal Government",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: " as an ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "IT Assistant",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " and effectively manage procurement records, optimized website/software, and propose technical solutions. Provide guidance/training, resolve database/server issues, and excel in web development, documentation, content writing, and Microsoft Office.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
    tasks: [
      "Data management of procurement records, insights generation, and retrieval of documents on request.",
      "Optimize website and software on users' issues and queries.",
      "Analyze and propose technical solutions based on users' needs and requirements.",
      "Provide guidance and training to users",
      "Administrate, support, and monitor databases by proactively resolving database and server issues.",
    ],
    skills: [
      "Web Development",
      "Documentation",
      "Content Writing",
      "Microsoft Office",
    ],
    to: "Present",
    from: "Feb 2020",
  });

  // sorting experience with dates
  const sortExperiences = (experience) => {
    const sortedExperience = experience.sort((experience1, experience2) => {
      return experience2.to.localeCompare(experience1.to);
    });

    return sortedExperience;
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("experience")
      .then((data) => {
        setExperiences(data.map((experience) => experience.fields));

        const recentExp = data.filter(
          (experience) => experience.fields.to === "Present"
        );
        setRecentExperience(recentExp[0].fields);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    experiences,
    recentExperience,
    sortExperiences,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
