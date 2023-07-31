"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ServiceContext = createContext({});

export const useServiceContext = () => useContext(ServiceContext);

const ServiceContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [services, setServices] = useState([
    {
      title: "Content Writing",
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
                  "Captivate your audience, inform them about your products, and drive action. Specializing in engaging, persuasive content that achieves your business goals. ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Increase website traffic",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "generate leads",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "boost sales",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "enhance brand image",
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
      darkIcon: {
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
          id: "YwZOaOOMeMmTDZaejwpsb",
          type: "Asset",
          createdAt: "2023-07-01T15:43:47.850Z",
          updatedAt: "2023-07-01T15:43:47.850Z",
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
          title: "content-writing",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/YwZOaOOMeMmTDZaejwpsb/ff15a7c4f60e0870014d05808f857c39/content-writing.png",
            details: {
              size: 6131,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "content-writing.png",
            contentType: "image/png",
          },
        },
      },
      lightIcon: {
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
          id: "2CpdhPfDiKLt0wje0LHJ58",
          type: "Asset",
          createdAt: "2023-07-01T16:03:40.091Z",
          updatedAt: "2023-07-01T16:03:40.091Z",
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
          title: "content-writing",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/2CpdhPfDiKLt0wje0LHJ58/f36fb3a5be996f9381a9d9183e2de02f/content-writing.png",
            details: {
              size: 6192,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "content-writing.png",
            contentType: "image/png",
          },
        },
      },
    },
    {
      title: "Graphics Design",
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
                  "Stand out in a visual world. Create impactful graphics that ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "convey messages",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "attract attention",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "boost brand awareness",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ". Increase sales and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "engage customers",
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
                value: "visually appealing designs",
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
      darkIcon: {
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
          id: "3fF4qXh4c0veonCe0cgtwU",
          type: "Asset",
          createdAt: "2023-07-01T15:43:47.846Z",
          updatedAt: "2023-07-01T15:43:47.846Z",
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
          title: "graphic-design",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3fF4qXh4c0veonCe0cgtwU/c9275f955f679a84d05be69ad664d2d9/graphic-design.png",
            details: {
              size: 10696,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "graphic-design.png",
            contentType: "image/png",
          },
        },
      },
      lightIcon: {
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
          id: "6RxPtNUz3C4It8axBGGq9o",
          type: "Asset",
          createdAt: "2023-07-01T16:03:40.096Z",
          updatedAt: "2023-07-01T16:03:40.096Z",
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
          title: "graphic-design",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/6RxPtNUz3C4It8axBGGq9o/f4a2c0610e41dc3253d427d92fb4710f/graphic-design.png",
            details: {
              size: 10599,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "graphic-design.png",
            contentType: "image/png",
          },
        },
      },
    },
    {
      title: "Web Design",
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
                  "Unlock online success. Custom websites exceeding expectations. User-friendly, visually pleasing, and optimized for search engines. ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Enhance visibility",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "generate leads",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "boost sales",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "satisfy customers",
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
      darkIcon: {
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
          id: "4n81ZoLYC78yqYNe99MqvR",
          type: "Asset",
          createdAt: "2023-07-01T15:43:47.852Z",
          updatedAt: "2023-07-01T15:43:47.852Z",
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
          title: "web-design",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4n81ZoLYC78yqYNe99MqvR/ec755c3594980847eecca2d8b62ffefd/web-design.png",
            details: {
              size: 5467,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-design.png",
            contentType: "image/png",
          },
        },
      },
      lightIcon: {
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
          id: "4xR6OzhvkqBESaGQJqh9cB",
          type: "Asset",
          createdAt: "2023-07-01T16:03:40.087Z",
          updatedAt: "2023-07-01T16:03:40.087Z",
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
          title: "web-design",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4xR6OzhvkqBESaGQJqh9cB/ecd14f355cc3c7708f4aa7f5b5318952/web-design.png",
            details: {
              size: 5308,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-design.png",
            contentType: "image/png",
          },
        },
      },
    },
    {
      title: "Web Development",
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
                  "Tailored websites for business success. Secure, scalable, and reliable solutions. ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "Achieve goals",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "optimize efficiency",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "save resources",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "increase productivity",
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
      darkIcon: {
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
          id: "1MVu34uxKcJoBjyOCi6F4d",
          type: "Asset",
          createdAt: "2023-07-01T15:43:47.854Z",
          updatedAt: "2023-07-01T15:43:47.854Z",
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
          title: "web-development",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/1MVu34uxKcJoBjyOCi6F4d/f53fcf07e5724b690e0b5286f096bc9a/web-development.png",
            details: {
              size: 7946,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-development.png",
            contentType: "image/png",
          },
        },
      },
      lightIcon: {
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
          id: "6IBjUOZlEpd3aJPiiqLpIn",
          type: "Asset",
          createdAt: "2023-07-01T16:03:40.094Z",
          updatedAt: "2023-07-01T16:03:40.094Z",
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
          title: "web-development",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/6IBjUOZlEpd3aJPiiqLpIn/da6998d2e1e81f83efa30afe89b6984e/web-development.png",
            details: {
              size: 7671,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-development.png",
            contentType: "image/png",
          },
        },
      },
    },
    {
      title: "Web Scraping",
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
                  "Gain a competitive edge with data insights. Reliable, efficient, and affordable web scraping services. Understand competitors,",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: " identify opportunities",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "refine products",
                nodeType: "text",
              },
              {
                data: {},
                marks: [],
                value: ", and ",
                nodeType: "text",
              },
              {
                data: {},
                marks: [
                  {
                    type: "bold",
                  },
                ],
                value: "make informed decisions",
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
      darkIcon: {
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
          id: "73tkvyvUxFeC42wSOioQYW",
          type: "Asset",
          createdAt: "2023-07-01T15:43:47.848Z",
          updatedAt: "2023-07-01T15:43:47.848Z",
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
          title: "web-scraping",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/73tkvyvUxFeC42wSOioQYW/cbe4ea43a1560997335d162a49f921d1/web-scraping.png",
            details: {
              size: 8444,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-scraping.png",
            contentType: "image/png",
          },
        },
      },
      lightIcon: {
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
          id: "2eJzOHSXaY8Lz7wIKJ4HRM",
          type: "Asset",
          createdAt: "2023-07-01T16:03:40.085Z",
          updatedAt: "2023-07-01T16:03:40.085Z",
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
          title: "web-scraping",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/2eJzOHSXaY8Lz7wIKJ4HRM/27b8423e3e52b7b057482b940a381955/web-scraping.png",
            details: {
              size: 8265,
              image: {
                width: 500,
                height: 500,
              },
            },
            fileName: "web-scraping.png",
            contentType: "image/png",
          },
        },
      },
    },
  ]);

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("service")
      .then((data) => {
        setServices(data.map((service) => service.fields));
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    services,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
