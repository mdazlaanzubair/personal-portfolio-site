"use client";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";

import useNavStore from "@/store/NavStore";
import useThemeStore from "@/store/ThemeStore";

import lightLogo from "../../public/logo/light/plain.svg";
import darkLogo from "../../public/logo/dark/plain.svg";
import accentLogo from "../../public/logo/accent/plain.svg";

import NavToggler from "./NavToggler";
import ThemeToggler from "../ThemeToggler";

const SideNav = () => {
  const [activeLogo, setActiveLogo] = useState("");
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const activeNav = useNavStore((state) => state.activeNav);
  const navActivator = useNavStore((state) => state.navActivator);
  const toggleNav = useNavStore((state) => state.toggleNav);

  useEffect(() => {
    isDarkMode ? setActiveLogo(lightLogo.src) : setActiveLogo(darkLogo.src);
  }, [isDarkMode]);

  const nav_links = [
    { title: "About", link: "about-section" },
    { title: "Services", link: "service-section" },
    { title: "Exp.", link: "experience-section" },
    { title: "Work", link: "project-section" },
    { title: "Contact", link: "contact-section" },
  ];

  return (
    <nav className="fixed flex flex-col gap-2 top-0 left-0 bottom-0 py-3 px-0 bg-base-100 z-20 overflow-hidden">
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
      >
        <img src={activeLogo} width="30" height="30" />
      </Link>
      <NavToggler />
      <ul
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
              to={link}
              smooth={true}
              offset={-62}
              duration={500}
              onClick={() => navActivator(title)}
            >
              <li
                key={index}
                className={`[writing-mode:vertical-rl] rotate-180 border-l-2 p-3 text-xs lg:text-sm cursor-pointer transition-all ease-in-out duration-300 ${
                  title === activeNav
                    ? "font-semibold text-primary border-l-primary bg-dark"
                    : "font-normal text-base-content border-l-base-100 bg-base-100 hover:bg-base-100 hover:font-semibold hover:border-l-base-content"
                }`}
              >
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <ThemeToggler />
      <span className="w-px h-1/2 bg-base-content mx-auto"></span>
    </nav>
  );
};

export default SideNav;
