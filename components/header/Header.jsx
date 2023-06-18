"use client";

import FloatingNav from "./FloatingNav";
import { useState } from "react";

const Header = () => {
  const [floatingNavToggle, setFloatingNavToggle] = useState(false);
  return (
    <div className="navbar bg-navy-dark shadow-sm sticky top-0 z-50">
      <div className="navbar-start"></div>
      <div className="navbar-center p-0">
        <a className="normal-case text-2xl font-black tracking-wider">
          Azlaan.
        </a>
      </div>
      <div className="navbar-end">
        <label className="lg:hidden btn btn-ghost swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={() => setFloatingNavToggle(!floatingNavToggle)}
          />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {/* mobile nav */}
      {floatingNavToggle ? <FloatingNav /> : ""}
    </div>
  );
};

export default Header;
