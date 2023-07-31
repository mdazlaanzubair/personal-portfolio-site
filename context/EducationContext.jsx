"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const EducationContext = createContext({});

export const useEducationContext = () => useContext(EducationContext);

const EducationContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [degrees, setDegrees] = useState([
    {
      title: "Graduation",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "What a thrill! my ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "paper crane",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " production line had to be ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "shut down",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", so I could finally discover my true passion: ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "coding ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: "and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "chasing bugs",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " & ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "errors ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value:
                  "all day long. I'm so excited to spend the rest of my life in this ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "stimulating ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: "and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "fulfilling career",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ".",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      type: "Degree",
      institute: "Ilma University",
      from: "2016",
      to: "2020",
      url: "http://www.google.com/search?q=ilma+university+formerly+ibt",
      field: "BS - Software Engineering",
    },
    {
      title: "College",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "While I didn't particularly want to attend Matric, it was a required checkbox on the university's admission form. Although not the most enjoyable experience, I did make some friends and gained a valuable piece of paper that has opened doors for me.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      type: "Degree",
      institute: "Federnal Govt. Boys College",
      from: "2012",
      to: "2014",
      url: "http://www.google.com/search?q=F.G.+Boys+Intermediate+College+Karachi+Cantt",
      field: "Pre-Engineering",
    },
    {
      title: "High School",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "Oh, joy! School was a place where time crawled like a ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "snail on vacation",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value:
                  ". I somehow survived the endless education. My affair with the schooling lasted for whole ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "2 years ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "italic",
                  },
                ],
                value: "(Matric was my savior),",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " while others couldn't resist ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "three-year feast",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " with ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "A/O",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " to ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "XYZ levels",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ".",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      type: "Degree",
      institute: "St. Patrick's High School",
      from: "2010",
      to: "2012",
      url: "http://www.google.com/search?q=st+patrick+high+school+saddar+karachi",
      field: "Computer Science",
    },
  ]);
  const [certificates, setCertificates] = useState({
    title: "Python Programming",
    description: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "It is a ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "5-module",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " course that teaches you the basics of programming using the ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Python programming language",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: ". The course is taught by ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Dr. Charles Severance",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: ", a professor of C",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "omputer Science",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: " at the ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "University of Michigan",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: ". This",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: " ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                "course is a great introduction to programming for anyone who wants to learn more about this important skill. It is well-structured and engaging, and Dr. Severance is an excellent instructor.\n\n",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
    type: "Certification",
    institute: "University of Michigan",
    from: "null",
    to: "2016",
    url: "https://www.coursera.org/account/accomplishments/certificate/893KLF5Y6NL9",
    field: "Python Programming",
  });

  // segregate education into degrees / certificates
  const segregateQualifications = (qualification) => {
    setDegrees(
      qualification
        .filter((education) => education.fields.type === "Degree")
        .map((education) => education.fields)
    );

    setCertificates(
      qualification
        .filter((education) => education.fields.type !== "Degree")
        .map((education) => education.fields)
    );
  };

  // sorting qualification with dates
  const sortQualification = (qualification) => {
    const sortedQualification = qualification.sort(
      (qualification1, qualification2) => {
        return qualification2.to.localeCompare(qualification1.to);
      }
    );

    return sortedQualification;
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("education")
      .then((data) => {
        segregateQualifications(data);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    degrees,
    certificates,
    sortQualification,
  };

  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
