"use client";

import { useSocialContext } from "@/context/SocialContext";
import * as FeatherIcon from "react-icons/fi";

const SocialNav = () => {
  const { socialLinks } = useSocialContext();

  return socialLinks && socialLinks.length > 0 ? (
    <div className="flex flex-row items-center z-20">
      I&apos;m Social
      {/* {socialLinks.map((socialLink, index) => {
        const { title, url, icon } = socialLink.fields;
        const SocialIcon = FeatherIcon[icon];
        if (icon !== "null") {
          return (
            <div
              className="tooltip hover:tooltip-open tooltip-top tooltip-primary"
              data-tip={title}
              key={index}
            >
              <a
                href={url}
                className="btn btn-ghost text-xl hover:bg-transparent btn-circle hover:text-primary hover:-translate-y-2 transition-all ease-in-out duration-500 cursor-pointer"
                target="_blank"
              >
                <SocialIcon />
              </a>
            </div>
          );
        }
      })} */}
    </div>
  ) : null;
};

export default SocialNav;
