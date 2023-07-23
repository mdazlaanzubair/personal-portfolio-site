"use client";

import { useSocialContext } from "@/context/SocialContext";
import Link from "next/link";
import * as FontAwesome6Icon from "react-icons/fa";
import ResumeDownloadBtn from "../ResumeDownloadBtn";
import { useState } from "react";

const TopNav = () => {
  const [activeSocialLink, setActiveSocialLink] = useState("Friendly");
  const { socialLinks } = useSocialContext();

  return socialLinks && socialLinks.length > 0 ? (
    <nav className="flex flex-row w-full gap-3 items-center justify-between text-xs mb-5">
      <div className="flex flex-col gap-1 items-start justify-start">
        <div className="w-full flex flex-row justify-between items-start">
          <span className="font-black">I&apos;m Social</span>
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          {socialLinks.map((socialLink, index) => {
            const { title, url, icon } = socialLink.fields;
            const SocialIcon = FontAwesome6Icon[icon];
            if (icon !== "null") {
              return (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  className="bg-base-100 p-3 text-base-content shadow hover:text-primary hover:-translate-x-px hover:-translate-y-px hover:shadow-lg rounded-sm transition-all ease-in-out duration-300"
                  title={title}
                  onMouseOver={() => setActiveSocialLink(title)}
                  onMouseOut={() => setActiveSocialLink("Friendly")}
                >
                  <SocialIcon />
                </Link>
              );
            }
          })}
        </div>
        <div className="w-full flex flex-row justify-end items-start">
          <span
            className={`font-black ${
              activeSocialLink === "Friendly" ? "" : "text-primary"
            }`}
          >
            {activeSocialLink}
          </span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <ResumeDownloadBtn />
      </div>
    </nav>
  ) : null;
};

export default TopNav;
