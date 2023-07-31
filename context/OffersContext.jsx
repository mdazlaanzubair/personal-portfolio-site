"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const OffersContext = createContext({});

export const useOffersContext = () => useContext(OffersContext);

const OffersContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [offers, setOffers] = useState([
    {
      title: "Advanced Data Scraping",
      category: "Web Scraping",
      offers: [
        "Scrape up to 5000",
        "Data scraping from up to 5 websites",
        "Data cleaning, formatting, and analysis",
        "Output in CSV, Excel, or JSON format",
      ],
      type: "Premium",
      img: {
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
          id: "7tJCwHofzUbWojwEwKBolC",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.852Z",
          updatedAt: "2023-07-23T12:24:59.852Z",
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
          title: "web scraping premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/7tJCwHofzUbWojwEwKBolC/7b9bdd53e54bed6794437c21581595b4/web_scraping_premium.png",
            details: {
              size: 294472,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_scraping_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 250,
    },
    {
      title: "Agency / Business / Portfolio",
      category: "Web Development",
      offers: ["Responsive design", "Up to 5 pages", "Content upload"],
      type: "Basic",
      img: {
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
          id: "1PBMkLJajR005lNEaVHJDT",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.863Z",
          updatedAt: "2023-07-23T12:24:59.863Z",
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
          title: "web dev basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/1PBMkLJajR005lNEaVHJDT/e1d4329fcd10b6500f58c4030f550385/web_dev_basic.png",
            details: {
              size: 279060,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_dev_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Social Networking / Ecommerce",
      category: "Web Development",
      offers: [
        "Design customization",
        "Detailed code comments",
        "Responsive design",
        "Fully functional",
      ],
      type: "Premium",
      img: {
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
          id: "UXPCRAs8XwfDYrqPAaHQV",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.846Z",
          updatedAt: "2023-07-23T12:24:59.846Z",
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
          title: "web dev premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/UXPCRAs8XwfDYrqPAaHQV/306c57ddf92fe46c253a8911091ce421/web_dev_premium.png",
            details: {
              size: 580206,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_dev_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 2000,
    },
    {
      title: "Ecommerce",
      category: "Web Design",
      offers: [
        "Responsive design",
        "Up to 10 pages",
        "Source file",
        "Content upload",
        "10 custom assets",
      ],
      type: "Premium",
      img: {
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
          id: "4JAuEOlIkXdZll4nJxFHMP",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.867Z",
          updatedAt: "2023-07-23T12:24:59.867Z",
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
          title: "web design premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4JAuEOlIkXdZll4nJxFHMP/cf46eccdf4dc3d9509cf8ed506ee9232/web_design_premium.png",
            details: {
              size: 537954,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_design_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 300,
    },
    {
      title: "Agency / Business / Portfolio",
      category: "Web Design",
      offers: [
        "Responsive design",
        "Up to 5 pages",
        "Source file",
        "Content upload",
      ],
      type: "Basic",
      img: {
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
          id: "1XSYsyONRbBeW8cC3VAeYO",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.865Z",
          updatedAt: "2023-07-23T12:24:59.865Z",
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
          title: "web design basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/1XSYsyONRbBeW8cC3VAeYO/72bed0a1e3cdb20c12b53b84db5484c4/web_design_basic.png",
            details: {
              size: 642831,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_design_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Social Media Graphics",
      category: "Graphics Design",
      offers: ["10 social media posts", "Feed template", "Include source file"],
      type: "Premium",
      img: {
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
          id: "jJxk4LXV6avo6VEg9wnAC",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.862Z",
          updatedAt: "2023-07-23T12:24:59.862Z",
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
          title: "social media premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/jJxk4LXV6avo6VEg9wnAC/7faa953453bd8ff19b6aa9a0421cb5fc/social_media_premium.png",
            details: {
              size: 406204,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "social_media_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 70,
    },
    {
      title: "Social Media Graphics",
      category: "Graphics Design",
      offers: ["3 social media posts", "Feed template", "Include source file"],
      type: "Basic",
      img: {
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
          id: "3egBcf5xqKWrdM4UluymV9",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.859Z",
          updatedAt: "2023-07-23T12:24:59.859Z",
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
          title: "social media basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3egBcf5xqKWrdM4UluymV9/0c98afd2b5db09c727fa139f8449abff/social_media_basic.png",
            details: {
              size: 849894,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "social_media_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 20,
    },
    {
      title: "Logo Design",
      category: "Graphics Design",
      offers: [
        "3 initial concepts",
        "Logo transparency",
        "Final files in multiple formats",
        "Include 3D mockup",
      ],
      type: "Premium",
      img: {
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
          id: "3wiOYHRSiEerS9bpGksh1c",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.853Z",
          updatedAt: "2023-07-23T12:24:59.853Z",
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
          title: "logo design premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3wiOYHRSiEerS9bpGksh1c/cf063a30efe31edd0fa9755b012f5065/logo_design_premium.png",
            details: {
              size: 603821,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "logo_design_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 200,
    },
    {
      title: "Logo Design",
      category: "Graphics Design",
      offers: [
        "2 initial concepts",
        "Logo transparency",
        "10 rivisions",
        "Printable file",
      ],
      type: "Basic",
      img: {
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
          id: "5HTIjhscy02wFGqQ2ui8nj",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.856Z",
          updatedAt: "2023-07-23T12:24:59.856Z",
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
          title: "logo design basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/5HTIjhscy02wFGqQ2ui8nj/e18ff27448d44cc0430d62d4ad6bcb97/logo_design_basic.png",
            details: {
              size: 672388,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "logo_design_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Articles Writing",
      category: "Content Writing",
      offers: [
        "3 blog articles (500 words each)",
        "Topic research and idea generation",
        "SEO optimization",
      ],
      type: "Basic",
      img: {
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
          id: "4xJ33ivLncLj89uGov1Kd8",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.858Z",
          updatedAt: "2023-07-23T12:24:59.858Z",
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
          title: "content writing basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4xJ33ivLncLj89uGov1Kd8/3a94bbde14378e19e04d2b7e1aa4b116/content_writing_basic.png",
            details: {
              size: 743267,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "content_writing_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 200,
    },
    {
      title: "Articles Writing",
      category: "Content Writing",
      offers: [
        "10 blog articles (500 words each)",
        "SEO optimization",
        "Topic research and idea generation",
        "Social media promotion (2 platforms)",
      ],
      type: "Premium",
      img: {
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
          id: "5vMyPFZG7Do3QYLkS7GDME",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.850Z",
          updatedAt: "2023-07-23T12:24:59.850Z",
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
          title: "content writing premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/5vMyPFZG7Do3QYLkS7GDME/c5b4e60aeaf08679dcb7bf5aebce469d/content_writing_premium.png",
            details: {
              size: 849024,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "content_writing_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 500,
    },
    {
      title: "Data Scraping",
      category: "Web Scraping",
      offers: [
        "Scrape up to 1000 records",
        "Data scraping from up to 3 websites",
        "Data cleaning and formatting",
        "Output in CSV or Excel format",
      ],
      type: "Basic",
      img: {
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
          id: "6IQsHTYoRV26BUkSCzZ4Bm",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.869Z",
          updatedAt: "2023-07-23T12:24:59.869Z",
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
          title: "web scraping basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/6IQsHTYoRV26BUkSCzZ4Bm/f19bbff30616e834c656af9cbb73241f/web_scraping_basic.png",
            details: {
              size: 293857,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_scraping_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
  ]);
  const [filteredOffers, setFilteredOffers] = useState([
    {
      title: "Advanced Data Scraping",
      category: "Web Scraping",
      offers: [
        "Scrape up to 5000",
        "Data scraping from up to 5 websites",
        "Data cleaning, formatting, and analysis",
        "Output in CSV, Excel, or JSON format",
      ],
      type: "Premium",
      img: {
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
          id: "7tJCwHofzUbWojwEwKBolC",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.852Z",
          updatedAt: "2023-07-23T12:24:59.852Z",
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
          title: "web scraping premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/7tJCwHofzUbWojwEwKBolC/7b9bdd53e54bed6794437c21581595b4/web_scraping_premium.png",
            details: {
              size: 294472,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_scraping_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 250,
    },
    {
      title: "Agency / Business / Portfolio",
      category: "Web Development",
      offers: ["Responsive design", "Up to 5 pages", "Content upload"],
      type: "Basic",
      img: {
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
          id: "1PBMkLJajR005lNEaVHJDT",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.863Z",
          updatedAt: "2023-07-23T12:24:59.863Z",
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
          title: "web dev basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/1PBMkLJajR005lNEaVHJDT/e1d4329fcd10b6500f58c4030f550385/web_dev_basic.png",
            details: {
              size: 279060,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_dev_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Social Networking / Ecommerce",
      category: "Web Development",
      offers: [
        "Design customization",
        "Detailed code comments",
        "Responsive design",
        "Fully functional",
      ],
      type: "Premium",
      img: {
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
          id: "UXPCRAs8XwfDYrqPAaHQV",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.846Z",
          updatedAt: "2023-07-23T12:24:59.846Z",
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
          title: "web dev premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/UXPCRAs8XwfDYrqPAaHQV/306c57ddf92fe46c253a8911091ce421/web_dev_premium.png",
            details: {
              size: 580206,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_dev_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 2000,
    },
    {
      title: "Ecommerce",
      category: "Web Design",
      offers: [
        "Responsive design",
        "Up to 10 pages",
        "Source file",
        "Content upload",
        "10 custom assets",
      ],
      type: "Premium",
      img: {
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
          id: "4JAuEOlIkXdZll4nJxFHMP",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.867Z",
          updatedAt: "2023-07-23T12:24:59.867Z",
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
          title: "web design premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4JAuEOlIkXdZll4nJxFHMP/cf46eccdf4dc3d9509cf8ed506ee9232/web_design_premium.png",
            details: {
              size: 537954,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_design_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 300,
    },
    {
      title: "Agency / Business / Portfolio",
      category: "Web Design",
      offers: [
        "Responsive design",
        "Up to 5 pages",
        "Source file",
        "Content upload",
      ],
      type: "Basic",
      img: {
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
          id: "1XSYsyONRbBeW8cC3VAeYO",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.865Z",
          updatedAt: "2023-07-23T12:24:59.865Z",
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
          title: "web design basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/1XSYsyONRbBeW8cC3VAeYO/72bed0a1e3cdb20c12b53b84db5484c4/web_design_basic.png",
            details: {
              size: 642831,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_design_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Social Media Graphics",
      category: "Graphics Design",
      offers: ["10 social media posts", "Feed template", "Include source file"],
      type: "Premium",
      img: {
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
          id: "jJxk4LXV6avo6VEg9wnAC",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.862Z",
          updatedAt: "2023-07-23T12:24:59.862Z",
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
          title: "social media premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/jJxk4LXV6avo6VEg9wnAC/7faa953453bd8ff19b6aa9a0421cb5fc/social_media_premium.png",
            details: {
              size: 406204,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "social_media_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 70,
    },
    {
      title: "Social Media Graphics",
      category: "Graphics Design",
      offers: ["3 social media posts", "Feed template", "Include source file"],
      type: "Basic",
      img: {
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
          id: "3egBcf5xqKWrdM4UluymV9",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.859Z",
          updatedAt: "2023-07-23T12:24:59.859Z",
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
          title: "social media basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3egBcf5xqKWrdM4UluymV9/0c98afd2b5db09c727fa139f8449abff/social_media_basic.png",
            details: {
              size: 849894,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "social_media_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 20,
    },
    {
      title: "Logo Design",
      category: "Graphics Design",
      offers: [
        "3 initial concepts",
        "Logo transparency",
        "Final files in multiple formats",
        "Include 3D mockup",
      ],
      type: "Premium",
      img: {
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
          id: "3wiOYHRSiEerS9bpGksh1c",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.853Z",
          updatedAt: "2023-07-23T12:24:59.853Z",
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
          title: "logo design premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/3wiOYHRSiEerS9bpGksh1c/cf063a30efe31edd0fa9755b012f5065/logo_design_premium.png",
            details: {
              size: 603821,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "logo_design_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 200,
    },
    {
      title: "Logo Design",
      category: "Graphics Design",
      offers: [
        "2 initial concepts",
        "Logo transparency",
        "10 rivisions",
        "Printable file",
      ],
      type: "Basic",
      img: {
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
          id: "5HTIjhscy02wFGqQ2ui8nj",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.856Z",
          updatedAt: "2023-07-23T12:24:59.856Z",
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
          title: "logo design basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/5HTIjhscy02wFGqQ2ui8nj/e18ff27448d44cc0430d62d4ad6bcb97/logo_design_basic.png",
            details: {
              size: 672388,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "logo_design_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
    {
      title: "Articles Writing",
      category: "Content Writing",
      offers: [
        "3 blog articles (500 words each)",
        "Topic research and idea generation",
        "SEO optimization",
      ],
      type: "Basic",
      img: {
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
          id: "4xJ33ivLncLj89uGov1Kd8",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.858Z",
          updatedAt: "2023-07-23T12:24:59.858Z",
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
          title: "content writing basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/4xJ33ivLncLj89uGov1Kd8/3a94bbde14378e19e04d2b7e1aa4b116/content_writing_basic.png",
            details: {
              size: 743267,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "content_writing_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 200,
    },
    {
      title: "Articles Writing",
      category: "Content Writing",
      offers: [
        "10 blog articles (500 words each)",
        "SEO optimization",
        "Topic research and idea generation",
        "Social media promotion (2 platforms)",
      ],
      type: "Premium",
      img: {
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
          id: "5vMyPFZG7Do3QYLkS7GDME",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.850Z",
          updatedAt: "2023-07-23T12:24:59.850Z",
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
          title: "content writing premium",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/5vMyPFZG7Do3QYLkS7GDME/c5b4e60aeaf08679dcb7bf5aebce469d/content_writing_premium.png",
            details: {
              size: 849024,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "content_writing_premium.png",
            contentType: "image/png",
          },
        },
      },
      cost: 500,
    },
    {
      title: "Data Scraping",
      category: "Web Scraping",
      offers: [
        "Scrape up to 1000 records",
        "Data scraping from up to 3 websites",
        "Data cleaning and formatting",
        "Output in CSV or Excel format",
      ],
      type: "Basic",
      img: {
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
          id: "6IQsHTYoRV26BUkSCzZ4Bm",
          type: "Asset",
          createdAt: "2023-07-23T12:24:59.869Z",
          updatedAt: "2023-07-23T12:24:59.869Z",
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
          title: "web scraping basic",
          file: {
            url: "//images.ctfassets.net/atb1p2ainonv/6IQsHTYoRV26BUkSCzZ4Bm/f19bbff30616e834c656af9cbb73241f/web_scraping_basic.png",
            details: {
              size: 293857,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "web_scraping_basic.png",
            contentType: "image/png",
          },
        },
      },
      cost: 100,
    },
  ]);

  // performing filter on "offers" by types
  function filterByType(type = "Both") {
    if (type === "Both") {
      setFilteredOffers(offers);
    } else {
      setFilteredOffers(
        offers.filter(
          (offer) => offer.type.toLowerCase() === type.toLowerCase()
        )
      );
    }
  }

  // performing filter on "offers" by categories
  const filterByCategory = (filter = "All") => {
    if (filter === "All") {
      setFilteredOffers(offers);
    } else {
      setFilteredOffers(
        offers.filter(
          (offer) => offer.category.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  };

  // performing sort on "filteredOffers" by pricing
  function sortByPrice(ascending = "true") {
    let sortedList = [...filteredOffers];

    if (ascending === "true") {
      sortedList.sort((a, b) => a.cost - b.cost);
    } else {
      sortedList.sort((a, b) => b.cost - a.cost);
    }
    setFilteredOffers(sortedList);
  }

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("offers")
      .then((data) => {
        setOffers(data.map((offer) => offer.fields));
        setFilteredOffers(data.map((offer) => offer.fields));
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );

    // sorting offers
    sortByPrice();
  }, []);

  const value = {
    filteredOffers,
    filterByCategory,
    filterByType,
    sortByPrice,
  };

  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
};

export default OffersContextProvider;
