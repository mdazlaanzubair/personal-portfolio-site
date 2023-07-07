"use client";

import { Saira_Stencil_One } from "next/font/google";
import DesktopNav from "./DesktopNav";
import NavToggler from "./NavToggler";
import useScrollStore from "@/store/ScrollStore";
import lightLogo from "../../public/logo/light/radial-grad.svg";
import accentLogo from "../../public/logo/accent/radial-grad.svg";
import darkLogo from "../../public/logo/dark/radial-grad.svg";
import useThemeStore from "@/store/ThemeStore";
import { useEffect, useState } from "react";

const saira_Stencil_One = Saira_Stencil_One({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Header = () => {
  const [activeLogo, setActiveLogo] = useState("");
  const scrollPos = useScrollStore((state) => state.scrollPos);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    isDarkMode ? setActiveLogo(lightLogo.src) : setActiveLogo(darkLogo.src);
  }, [isDarkMode]);

  return (
    <div
      className={`navbar px-7 ${
        scrollPos.y > 50 ? "fixed top-0 z-20 bg-base-100 shadow-lg" : ""
      } backdrop-filter backdrop-blur-lg bg-opacity-75 transition-all ease-in-out duration-500`}
    >
      <div className="flex-1">
        <a
          href="#home-section"
          className="py-3 px-1 group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
          onMouseOver={() => setActiveLogo(accentLogo.src)}
          onMouseOut={() => {
            isDarkMode
              ? setActiveLogo(lightLogo.src)
              : setActiveLogo(darkLogo.src);
          }}
        >
          <img src={activeLogo} width="45" height="45" />
        </a>
      </div>
      <div className="flex-none">
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
        <div className="flex lg:hidden">
          <NavToggler />
        </div>
      </div>
    </div>
  );
};

export default Header;
