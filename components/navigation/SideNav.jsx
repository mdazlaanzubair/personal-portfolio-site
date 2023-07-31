"use client";

import { motion } from "framer-motion";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";

import useNavStore from "@/store/NavStore";
import useThemeStore from "@/store/ThemeStore";

import NavToggler from "./NavToggler";
import ThemeToggler from "../ThemeToggler";

import lightLogo from "@/public/logo/light/plain.svg";
import darkLogo from "@/public/logo/dark/plain.svg";
import accentLogo from "@/public/logo/accent/plain.svg";

const SideNav = () => {
  const [activeLogo, setActiveLogo] = useState(lightLogo.src);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const activeNav = useNavStore((state) => state.activeNav);
  const navActivator = useNavStore((state) => state.navActivator);
  const toggleNav = useNavStore((state) => state.toggleNav);
  const navToggler = useNavStore((state) => state.navToggler);

  useEffect(
    () =>
      isDarkMode ? setActiveLogo(lightLogo.src) : setActiveLogo(darkLogo.src),
    [isDarkMode]
  );

  const nav_links = [
    { title: "Home", link: "home-section" },
    { title: "About", link: "about-section" },
    { title: "Services", link: "service-section" },
    { title: "Exp.", link: "experience-section" },
    { title: "Work", link: "project-section" },
    { title: "Contact", link: "contact-section" },
  ];

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
    hidden: { opacity: 0, y: -2 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <nav className="fixed flex flex-col gap-2 justify-center items-center top-0 left-0 bottom-0 py-3 px-0 z-20 overflow-hidden">
      <Link
        to={"home-section"}
        smooth={true}
        offset={-200}
        duration={500}
        className="btn btn-ghost btn-square bg-base-100 hover:bg-transparent text-xl rounded-sm"
        onMouseEnter={() => setActiveLogo(accentLogo.src)}
        onMouseLeave={() =>
          isDarkMode
            ? setActiveLogo(lightLogo.src)
            : setActiveLogo(darkLogo.src)
        }
        onSetActive={() => {
          navActivator("home-section");
          navToggler();
        }}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
          src={activeLogo}
          className="w-8"
          alt="Muhammad Azlaan Zubair logo"
        />
      </Link>
      <NavToggler />
      <motion.ul
        variants={navBarVariant}
        initial="hidden"
        animate="visible"
        className={`${
          toggleNav
            ? "-translate-x-0 flex flex-col gap-0 justify-between flex-shrink"
            : "-translate-x-full"
        } transition-all ease-in-out duration-300`}
      >
        {nav_links.map((item, index) => {
          const { title, link } = item;
          return (
            <Link
              key={index}
              to={link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={() => navActivator(title)}
            >
              <motion.li
                variants={navLinksVariant}
                className={`[writing-mode:vertical-lr] uppercase rotate-180 border-l-2 py-3 px-4 text-xs lg:text-sm cursor-pointer transition-all ease-in-out duration-300 ${
                  title === activeNav
                    ? "font-semibold text-primary border-l-primary bg-dark"
                    : "font-normal text-base-content border-l-base-100 bg-base-100 hover:bg-base-100 hover:font-semibold hover:border-l-base-content"
                }`}
              >
                {title}
              </motion.li>
            </Link>
          );
        })}
      </motion.ul>
      <ThemeToggler animation_variant={navLinksVariant} />
      <motion.span
        className="w-px h-1/2 bg-base-content mx-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 2 }}
      ></motion.span>
    </nav>
  );
};

export default SideNav;
