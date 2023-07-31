"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ProjectContext = createContext({});

export const useProjectContext = () => useContext(ProjectContext);

const ProjectContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [featuredProjects, setFeaturedProjects] = useState([
    {
      title: "Getting Chic Done",
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "It is a lifestyle blog for modern moms using the ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "WordPress ",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: "platform and the ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Genesis Framework Theme",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ". The blog posts are written in ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "HTML",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "CSS",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", and ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "JavaScript",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", and the website uses ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Google Analytics ",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: "to track traffic. It is hosted on the ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Amazon Web Services (AWS)",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: " platform.\n",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The blog covers pregnancy, motherhood, fashion, and self-care topics. It is monetized through affiliate marketing and advertising. The blog has a mailing list of over ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "10,000 subscribers",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ".\n\n",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "3OMOtHgtmIEaBS210m8JNJ",
          type: "Asset",
          createdAt: "2023-07-18T07:31:54.833Z",
          updatedAt: "2023-07-18T07:31:54.833Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "Getting Chic Done",
          description: "",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3OMOtHgtmIEaBS210m8JNJ/20722ce51d1c55f8768ef9f3740c1ce6/gettingchicdone.png",
            details: {
              size: 540341,
              image: {
                width: 1800,
                height: 760,
              },
            },
            fileName: "gettingchicdone.png",
            contentType: "image/png",
          },
        },
      },
      tech: [
        "WordPress",
        "Google Analytics",
        "html/css/js",
        "AWS",
        "Genesis Framework",
      ],
      url: "https://gettingchicdone.com/",
      type: "Featured",
    },
    {
      title: "JomRun",
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "It is a Southeast Asia-based running app that helps users find and register for running events. The website is built on a number of technologies, along with some third-party services, such as ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Google Maps",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: " and ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Facebook",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value:
                  ", to provide users with additional functionality. Jomrun is built on a number of reliable and scalable technologies, which ensures that it will be able to ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "handle the growing number of users",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ".",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "6nRhFZAhhsdU7Nxjf6X4kB",
          type: "Asset",
          createdAt: "2023-07-17T12:42:58.183Z",
          updatedAt: "2023-07-17T12:42:58.183Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "jomrun",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/6nRhFZAhhsdU7Nxjf6X4kB/bca3909c7efa54d8a399f57333bd8c03/jomrun.png",
            details: {
              size: 1639611,
              image: {
                width: 1800,
                height: 760,
              },
            },
            fileName: "jomrun.png",
            contentType: "image/png",
          },
        },
      },
      tech: ["html", "css", "javascript", "php", "mysql"],
      url: "https://www.jomrun.com/",
      type: "Featured",
    },
    {
      title: "Epakai Commerce",
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "It is an online store that sells bathroom and kitchen accessories. The website was built for ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Pakai Industries Berhad",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", a ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Malaysian Company ",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: "that has been in the ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "sanitaryware industry",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: " for over ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "30 years",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ". The website accepts payments via ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "credit card",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "PayPal",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", and ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "bank transfer",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ", and has a ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "4.5 out of 5-star",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: " rating on ",
                marks: [],
                data: {},
              },
              {
                nodeType: "text",
                value: "Google Reviews",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                data: {},
              },
              {
                nodeType: "text",
                value: ".",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "2jrMlN0touqv5YcO63oXlM",
          type: "Asset",
          createdAt: "2023-07-17T12:42:58.185Z",
          updatedAt: "2023-07-17T12:42:58.185Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "epakai",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/2jrMlN0touqv5YcO63oXlM/773b349f202deaba00072a822323e7e0/epakai.png",
            details: {
              size: 579095,
              image: {
                width: 1800,
                height: 760,
              },
            },
            fileName: "epakai.png",
            contentType: "image/png",
          },
        },
      },
      tech: ["wordpress", "php", "sql", "stripe"],
      url: "https://epakai.com/",
      type: "Featured",
    },
    {
      title: "Analyticsmart",
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "It is a data analytics company that provides smart analytical services and solutions to businesses of all sizes. This responsive website was made for a Canadian client on WordPress and optimized for search engines.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "\n\n",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "4XNAaSewBzNZhr6C2Ef3Gm",
          type: "Asset",
          createdAt: "2023-07-17T12:42:58.188Z",
          updatedAt: "2023-07-17T12:42:58.188Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "analyticsmart",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4XNAaSewBzNZhr6C2Ef3Gm/26149e7d1ef6d38dc1c8fc6eeab0afd3/analyticsmart.png",
            details: {
              size: 1028874,
              image: {
                width: 1800,
                height: 760,
              },
            },
            fileName: "analyticsmart.png",
            contentType: "image/png",
          },
        },
      },
      tech: ["wordpress", "php ", "sql", "google analytics"],
      url: "https://analyticsmart.com/",
      type: "Featured",
    },
  ]);
  const [personalProjects, setPersonalProjects] = useState([
    {
      title: "Wildfire Tracker",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "A basic implementation of ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Web GIS",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ". This project is using the data that is coming from ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "NASA's EONET API",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " and plots it on ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Google Maps",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " on their respective coordinates.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "3zWbTKXJsfRYaMciSlH66c",
          type: "Asset",
          createdAt: "2023-07-28T17:02:09.215Z",
          updatedAt: "2023-07-28T17:02:09.215Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "Wild Fire Tracker",
          description: "Wild Fire Tracker Web App",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3zWbTKXJsfRYaMciSlH66c/1cbda40903051447a0ee2f90e2687857/fire.jpg",
            details: {
              size: 263701,
              image: {
                width: 870,
                height: 580,
              },
            },
            fileName: "fire.jpg",
            contentType: "image/jpeg",
          },
        },
      },
      tech: [
        "javascript",
        "nasa api",
        "react js",
        "google maps api",
        "web gis",
      ],
      url: "https://fire-tracking.vercel.app/",
      source: "https://github.com/mdazlaanzubair/fire-tracking",
      type: "Personal",
    },
    {
      title: "Promptare",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "A social media hub for ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Chat GPT ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: "users. Discover and share ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "powerful prompts",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "commands ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: "to enhance your Chat GPT experience.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "ZXuoWieO5SMlZ4PJVN8gt",
          type: "Asset",
          createdAt: "2023-07-29T08:22:39.945Z",
          updatedAt: "2023-07-29T08:22:39.945Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "prompt",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/ZXuoWieO5SMlZ4PJVN8gt/4d6f5ad9c650c94bf67ecfb18d145009/prompt.jpg",
            details: {
              size: 151944,
              image: {
                width: 1920,
                height: 1224,
              },
            },
            fileName: "prompt.jpg",
            contentType: "image/jpeg",
          },
        },
      },
      tech: ["next js", "next auth", "mongo db", "chat gpt", "react js"],
      url: "https://promptare.vercel.app/",
      source: "https://github.com/mdazlaanzubair/Promptare",
      type: "Personal",
    },
    {
      title: "Covid-19 Visualizer",
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Web GIS",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " project showcasing an interactive ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "3D visualization",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: " of ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "COVID-19",
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
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "atb1p2ainonv",
            },
          },
          id: "3rgSdVlutoNd1MlwElo1B2",
          type: "Asset",
          createdAt: "2023-07-29T08:22:39.942Z",
          updatedAt: "2023-07-29T08:22:39.942Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "covid",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3rgSdVlutoNd1MlwElo1B2/c07abb611176960ded226be2db7d70ea/covid.jpg",
            details: {
              size: 268308,
              image: {
                width: 1920,
                height: 1280,
              },
            },
            fileName: "covid.jpg",
            contentType: "image/jpeg",
          },
        },
      },
      tech: [
        "javascript",
        "snow pack",
        "three js",
        "covid 19",
        "world o meter",
      ],
      url: "https://track-covid-19.vercel.app/",
      source: "https://github.com/mdazlaanzubair/Covid-3d",
      type: "Personal",
    },
  ]);

  // segregate projects into Featured / Personal
  const segregateProjects = (projects) => {
    setFeaturedProjects(
      projects
        .filter((project) => project.fields.type === "Featured")
        .map((project) => project.fields)
    );

    setPersonalProjects(
      projects
        .filter((project) => project.fields.type !== "Featured")
        .map((project) => project.fields)
    );
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("project")
      .then((data) => {
        segregateProjects(data);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    featuredProjects,
    personalProjects,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
