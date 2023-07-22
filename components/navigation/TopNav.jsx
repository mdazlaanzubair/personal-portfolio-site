"use client";

import { useSocialContext } from "@/context/SocialContext";
import Link from "next/link";
import * as FeatherIcon from "react-icons/fi";
import ResumeDownloadBtn from "../ResumeDownloadBtn";

const TopNav = () => {
  const { socialLinks } = useSocialContext();

  return socialLinks && socialLinks.length > 0 ? (
    <nav className="flex flex-row w-full gap-3 items-center justify-between text-xs mb-5">
      <div className="flex flex-row gap-1 lg:gap-3 items-center justify-center">
        <span className="font-black">I&apos;m Social</span>
        {socialLinks.map((socialLink, index) => {
          const { title, url, icon } = socialLink.fields;
          const SocialIcon = FeatherIcon[icon];
          if (icon !== "null") {
            return (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="bg-base-100 p-3 hover:text-primary hover:bg-transparent rounded font-black"
                title={title}
              >
                <SocialIcon />
              </Link>
            );
          }
        })}
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <ResumeDownloadBtn />
      </div>
    </nav>
  ) : null;
};

export default TopNav;
