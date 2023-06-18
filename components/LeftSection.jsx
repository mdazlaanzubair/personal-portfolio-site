"use client";

import {
  TfiGithub as Github,
  TfiFacebook as Facebook,
  TfiTwitterAlt as Twitter,
  TfiLinkedin as Linkedin,
} from "react-icons/tfi";
import { RiInstagramFill as Instagram } from "react-icons/ri";
import { useState } from "react";

const LeftSection = () => {
  const social_links = [
    { title: "Github", link: "#Github", Icon: Github },
    { title: "Facebook", link: "#Facebook", Icon: Facebook },
    { title: "Twitter", link: "#Twitter", Icon: Twitter },
    { title: "Instagram", link: "#Instagram", Icon: Instagram },
    { title: "Linkedin", link: "#Linkedin", Icon: Linkedin },
  ];

  const [selectedLink, setSelectedLink] = useState("I'm Social");

  return (
    <div className="flex flex-col items-center max-h-[80vh] justify-between gap-5 fixed left-5 bottom-0 ">
      <p
        className={`text-xs text-sideways rotate-180 tracking-wider transition-colors duration-500 ${
          selectedLink === "I'm Social" ? "text-navy-light" : "text-navy-accent"
        }`}
      >
        I&apos;m Social
      </p>

      <div className="flex flex-col gap-3">
        {social_links.map((social_link, index) => {
          const { title, link, Icon } = social_link;
          return (
            <div
              className="tooltip hover:tooltip-open tooltip-right tooltip-success"
              data-tip={title}
              key={index}
            >
              <a
                href={link}
                className="btn btn-ghost btn-sm bg-navy hover:bg-navy-light btn-circle text-navy-slate-dark hover:text-navy-accent hover:-translate-y-1 transition-all ease-in-out duration-500 cursor-pointer"
                target="_blank"
                onMouseOver={() => setSelectedLink(title)}
                onMouseLeave={() => setSelectedLink("I'm Social")}
              >
                <Icon />
              </a>
            </div>
          );
        })}

        <span className="w-0.5 h-20 mx-auto shrink my-2 bg-navy-light"></span>
      </div>
    </div>
  );
};

export default LeftSection;
