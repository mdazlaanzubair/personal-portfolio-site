"use client";

import {
  FcHome as Home,
  FcAbout as About,
  FcServices as Service,
  FcWorkflow as Experience,
  FcTemplate as Work,
  FcAddressBook as Contact,
} from "react-icons/fc";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

import ThemeToggler from "../ThemeToggler";
import { Link } from "react-scroll";
import { useState } from "react";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState("Navigation");
  const [toggleNav, setToggleNav] = useState(false);

  const nav_links = [
    { title: "Home", link: "home-section", Icon: Home },
    { title: "About", link: "about-section", Icon: About },
    { title: "Services ", link: "service-section", Icon: Service },
    { title: "Experience ", link: "experience-section", Icon: Experience },
    { title: "Projects ", link: "project-section", Icon: Work },
    { title: "Contact", link: "contact-section", Icon: Contact },
  ];

  return (
    <nav>
      <div
        className={`${
          toggleNav ? "bottom-10" : "-bottom-full"
        } fixed left-1/2 -translate-x-1/2 flex flex-col justify-between gap-2 items-center p-0 z-20`}
      >
        <span className="text-xs p-2 mx-auto font-semibold bg-primary rounded-full text-base-100">
          {activeNav}
        </span>
        <div className="flex flex-row bg-blue-900 bg-opacity-90 rounded-full px-5">
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
      </div>
      <div className="fixed top-3 right-3 flex flex-row gap-1 items-center justify-between">
        <button
          type="button"
          className="btn btn-ghost btn-square text-2xl"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <MdOutlineClose /> : <CgMenuGridR />}
        </button>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default FloatingNav;
