"use client";

import { useSocialContext } from "@/context/SocialContext";
import Link from "next/link";
import * as FeatherIcon from "react-icons/fi";
import Button from "../Button";

const TopNav = () => {
  const { socialLinks } = useSocialContext();

  return socialLinks && socialLinks.length > 0 ? (
    <nav className="absolute top-2 pl-16 pr-3 lg:px-16 flex flex-row w-full gap-3 items-center justify-between text-xs">
      <div className="flex flex-row gap-3 items-center justify-center">
        <span className="text-primary font-medium">I&apos;m Social</span>
        {socialLinks.map((socialLink, index) => {
          const { title, url, icon } = socialLink.fields;
          const SocialIcon = FeatherIcon[icon];
          if (icon !== "null") {
            return (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="bg-base-100 p-3 hover:text-primary hover:bg-transparent rounded"
                title={title}
              >
                <SocialIcon />
              </Link>
            );
          }
        })}
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <Button type={"btn"} text={"Resume"} link={"#"} />
      </div>
    </nav>
  ) : null;
};

export default TopNav;
