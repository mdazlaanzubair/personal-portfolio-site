"use client";

import { useSocialContext } from "@/context/SocialContext";
import Link from "next/link";
import * as FontAwesome6Icon from "react-icons/fa";
import ResumeLinkBtn from "../ResumeLinkBtn";
import { useState } from "react";

const TopNav = () => {
  const [activeSocialLink, setActiveSocialLink] = useState("Available");
  const { socialLinks } = useSocialContext();

  return (
    <nav className="flex flex-row w-full gap-3 items-center justify-between text-xs mb-5">
      <div className="flex flex-col gap-1 items-start justify-start">
        <div className="w-full flex flex-row justify-between items-start">
          <span className="font-black">I&apos;m Socially</span>
        </div>
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex flex-row justify-start items-center gap-2">
            {socialLinks.map((socialLink, index) => {
              const { title, url, icon } = socialLink;
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
                    onMouseOut={() => setActiveSocialLink("Available")}
                  >
                    <SocialIcon />
                  </Link>
                );
              }
            })}
          </div>
        )}
        <div className="w-full flex flex-row justify-end items-start">
          <span
            className={`font-black ${
              activeSocialLink === "Available" ? "" : "text-primary"
            }`}
          >
            {activeSocialLink}
          </span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <ResumeLinkBtn />
      </div>
    </nav>
  );
};

export default TopNav;
