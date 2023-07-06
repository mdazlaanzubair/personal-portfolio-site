"use client";

import { Saira_Stencil_One } from "next/font/google";
import DesktopNav from "./DesktopNav";
import NavToggler from "./NavToggler";
import useScrollStore from "@/store/ScrollStore";

const saira_Stencil_One = Saira_Stencil_One({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Header = () => {
  const scrollPos = useScrollStore((state) => state.scrollPos);

  return (
    <div
      className={`navbar px-7 ${
        scrollPos.y > 50 ? "fixed top-0 z-20 bg-base-100 shadow-lg" : ""
      } backdrop-filter backdrop-blur-lg bg-opacity-75 transition-all ease-in-out duration-500`}
    >
      <div className="flex-1">
        <a
          href="#home-section"
          className="py-3 group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
        >
          <div className="avatar placeholder mask mask-hexagon p-1.5 bg-base-content group-hover:bg-primary rounded-none transition-all ease-in-out duration-300">
            <div className="w-11 rounded-none mask mask-hexagon bg-base-100 transition-all ease-in-out duration-300">
              <span
                className={`group-hover:text-primary text-2xl transition-all ease-in-out duration-300 ${saira_Stencil_One.className}`}
              >
                A
              </span>
            </div>
          </div>
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
