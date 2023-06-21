"use client";

import FloatingNav from "./FloatingNav";
import { useState } from "react";
import FloatingNavBtn from "./FloatingNavBtn";

const Header = () => {
  const [floatingNavToggle, setFloatingNavToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center p-0">
        <a className="normal-case text-2xl font-black tracking-wider">
          Azlaan.
        </a>
      </div>
      <div className="navbar-end">
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
