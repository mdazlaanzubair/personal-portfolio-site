"use client";
import { Link } from "react-scroll";

import lightLogo from "../../public/logo/light/radial-grad.svg";
import darkLogo from "../../public/logo/dark/radial-grad.svg";
import useThemeStore from "@/store/ThemeStore";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLogo, setActiveLogo] = useState("");
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    isDarkMode ? setActiveLogo(lightLogo.src) : setActiveLogo(darkLogo.src);
  }, [isDarkMode]);

  return (
    <div
      id="header-section"
      className="flex flex-col justify-center items-center mb-10"
    >
      <Link
        to={"home-section"}
        smooth={true}
        offset={-200}
        duration={500}
        className="py-5 px-auto group hover:-translate-y-0.5 transition-all ease-in-out duration-300 cursor-pointer"
      >
        <img src={activeLogo} width="60" height="60" />
      </Link>
    </div>
  );
};

export default Header;
