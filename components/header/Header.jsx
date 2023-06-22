"use client";

import FloatingNav from "./FloatingNav";
import { useState } from "react";
import FloatingNavBtn from "./FloatingNavBtn";
import { Yesteryear } from "next/font/google";

const yesteryear = Yesteryear({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Header = () => {
  const [floatingNavToggle, setFloatingNavToggle] = useState(false);

  const nav_links = [
    { title: "Home", url: "#home-section" },
    { title: "About", url: "#about-section" },
    { title: "Services ", url: "#service-section" },
    { title: "Work ", url: "#Work" },
    { title: "Contact", url: "#Contact" },
  ];

  return (
    <div className="navbar px-10 fixed top-0 z-10 py-5 bg-base-100 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-75">
      <div className="navbar-start">
        <a
          className={`normal-case text-3xl font-black tracking-wider
            ${yesteryear.className}`}
        >
          Azlaan.
        </a>
      </div>
      <div className="navbar-end flex-none">
        <ul className="menu menu-horizontal px-1">
          {nav_links.map((link, index) => (
            <li className="group">
              <a href={link.url} className="hover:bg-transparent">
                <span className="relative overflow-x-hidden inline-flex font-medium tracking-wider text-base text-navy-slate-dark group-hover:text-primary">
                  {link.title}
                  <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <FloatingNavBtn
          floatingNavToggle={floatingNavToggle}
          setFloatingNavToggle={setFloatingNavToggle}
        />
      </div>

      {/* mobile nav */}
      {floatingNavToggle ? <FloatingNav /> : null}
    </div>
  );
};

export default Header;
