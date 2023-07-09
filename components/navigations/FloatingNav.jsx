"use client";

// import {
//   FiMeh as Home,
//   FiAtSign as About,
//   FiSettings as Service,
//   FiBriefcase as Experience,
//   FiBox as Work,
//   FiAtSign as Contact,
// } from "react-icons/fi";

import {
  FcHome as Home,
  FcAbout as About,
  FcServices as Service,
  FcWorkflow as Experience,
  FcTemplate as Work,
  FcAddressBook as Contact,
} from "react-icons/fc";

import ThemeToggler from "../ThemeToggler";
import { Link } from "react-scroll";
import { useState } from "react";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState("Navigation");

  const nav_links = [
    { title: "Home", link: "home-section", Icon: Home },
    { title: "About", link: "about-section", Icon: About },
    { title: "Services ", link: "service-section", Icon: Service },
    { title: "Experience ", link: "experience-section", Icon: Experience },
    { title: "Projects ", link: "project-section", Icon: Work },
    { title: "Contact", link: "contact-section", Icon: Contact },
  ];

  return (
    // <div className="flex flex-row lg:flex-col justify-between gap-3 items-center px-3 lg:px-0 py-0 lg:py-3 fixed bottom-10 left-1/2 -translate-x-1/2 lg:bottom-1/2 lg:translate-y-1/2 lg:left-16 bg-base-200 bg-opacity-60 rounded-full z-20">
    <div className="flex flex-col justify-between gap-3 items-center px-0 py-3 fixed bottom-1/2 translate-y-1/2 left-0 lg:left-10 bg-base-200 bg-opacity-60 rounded-full z-20">
      <span className="text-xs px-2 py-2 mx-auto text-primary font-semibold [writing-mode:vertical-rl] rotate-180">
        {activeNav}
      </span>
      {/* <div className="flex flex-row lg:flex-col bg-blue-900 bg-opacity-90 rounded-full"> */}
      <div className="flex flex-col bg-blue-900 bg-opacity-90 rounded-full">
        {nav_links.map((nav_link, index) => {
          const { title, link, Icon } = nav_link;
          return (
            <Link
              to={link}
              smooth={true}
              offset={-100}
              duration={500}
              key={index}
              className="group relative cursor-pointer btn btn-sm lg:btn-md btn-ghost btn-circle hover:bg-transparent"
              onMouseOver={() => setActiveNav(title)}
            >
              <span className="text-lg text-slate-200 group-hover:text-primary group-hover:-translate-y-2 transition-all ease-in-out duration-300">
                <Icon />
              </span>
            </Link>
          );
        })}
      </div>
      <ThemeToggler />
    </div>
  );
};

export default FloatingNav;
