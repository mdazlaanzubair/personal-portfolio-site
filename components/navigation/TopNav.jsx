"use client";

import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, translateX: -2 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full flex flex-row justify-between items-start"
        >
          <span className="font-black">I&apos;m Socially</span>
        </motion.div>
        {socialLinks && socialLinks.length > 0 && (
          <ul className="flex flex-row justify-start items-center gap-2 list-none">
            {socialLinks.map((socialLink, index) => {
              const { title, url, icon } = socialLink;
              const SocialIcon = FontAwesome6Icon[icon];
              if (icon !== "null") {
                return (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    title={title}
                    onMouseOver={() => setActiveSocialLink(title)}
                    onMouseOut={() => setActiveSocialLink("Available")}
                  >
                    <motion.li
                      initial={{ opacity: 0, translateX: -5, translateY: -5 }}
                      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{ duration: 0.3, delay: (index + 1) * 0.2 }}
                      className="bg-base-100 p-3 text-base-content shadow hover:text-primary hover:-translate-x-px hover:-translate-y-px hover:shadow-lg rounded-sm transition-all ease-in-out duration-300"
                    >
                      <SocialIcon />
                    </motion.li>
                  </Link>
                );
              }
            })}
          </ul>
        )}
        <div className="w-full flex flex-row justify-end items-start">
          <motion.span
            initial={{ opacity: 0, translateX: 30 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={`font-black ${
              activeSocialLink === "Available" ? "" : "text-primary"
            }`}
          >
            {activeSocialLink}
          </motion.span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <motion.span
          initial={{ opacity: 0, scale: -1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <ResumeLinkBtn />
        </motion.span>
      </div>
    </nav>
  );
};

export default TopNav;
