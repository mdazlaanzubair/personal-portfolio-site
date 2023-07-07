"use client";

import { useSocialContext } from "@/context/SocialContext";
import * as FeatherIcon from "react-icons/fi";

const SocialNav = () => {
  const { socialLinks } = useSocialContext();

  return socialLinks && socialLinks.length > 0 ? (
    <>
      {/* for desktop view */}
      <div className="hidden lg:flex flex-col items-center justify-center max-h-[80vh] gap-5 fixed left-8 top-1/2 -translate-y-1/2  z-10">
        <div className="flex flex-col">
          {socialLinks.map((socialLink, index) => {
            const { title, url, icon } = socialLink.fields;
            const SocialIcon = FeatherIcon[icon];
            return (
              <div
                className="tooltip hover:tooltip-open tooltip-right tooltip-primary"
                data-tip={title}
                key={index}
              >
                <a
                  href={url}
                  className="btn btn-ghost text-xl hover:bg-transparent btn-circle hover:text-primary hover:-translate-y-2 hover:-translate-x-1 transition-all ease-in-out duration-500 cursor-pointer"
                  target="_blank"
                >
                  <SocialIcon />
                </a>
              </div>
            );
          })}

          {/* <span className="w-0.5 h-24 mx-auto shrink my-2 bg-neutral-content"></span> */}
        </div>
      </div>

      {/* for mobile view */}
      <div className="flex lg:hidden flex-row items-center justify-center">
        {socialLinks.map((socialLink, index) => {
          const { title, url, icon } = socialLink.fields;
          const SocialIcon = FeatherIcon[icon];
          return (
            <div
              className="tooltip hover:tooltip-open tooltip-top tooltip-primary"
              data-tip={title}
              key={index}
            >
              <a
                href={url}
                className="btn btn-ghost text-xl hover:bg-transparent btn-circle hover:text-primary hover:-translate-y-2 hover:-translate-x-1 transition-all ease-in-out duration-500 cursor-pointer"
                target="_blank"
              >
                <SocialIcon />
              </a>
            </div>
          );
        })}
      </div>
    </>
  ) : null;
};

export default SocialNav;
