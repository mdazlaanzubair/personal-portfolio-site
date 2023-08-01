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

  const navBarVariant = {
    hidden: { opacity: 0, x: -2 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const navLinksVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <nav className="flex flex-row w-full gap-3 items-center justify-between text-xs mb-5">
      <div className="flex flex-col gap-1 items-start justify-start">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="w-full flex flex-row justify-between items-start"
        >
          <span className="font-black">I&apos;m Socially</span>
        </motion.div>
        {socialLinks && socialLinks.length > 0 && (
          <motion.ul
            variants={navBarVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-row justify-start items-center gap-2 list-none"
          >
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
                      variants={navLinksVariant}
                      className="bg-base-100 p-3 text-base-content shadow hover:text-primary hover:-translate-x-px hover:-translate-y-px hover:shadow-lg rounded-sm transition-all ease-in-out duration-300"
                    >
                      <SocialIcon />
                    </motion.li>
                  </Link>
                );
              }
            })}
          </motion.ul>
        )}
        <div className="w-full flex flex-row justify-end items-start">
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={`font-black ${
              activeSocialLink === "Available" ? "" : "text-primary"
            }`}
          >
            {activeSocialLink}
          </motion.span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-end">
        <ResumeLinkBtn />
      </div>
    </nav>
  );
};

export default TopNav;
