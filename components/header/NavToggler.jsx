"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";

const NavToggler = () => {
  const { navToggle, setNavToggle } = useGlobalContext();

  return (
    <button
      onClick={() => setNavToggle(!navToggle)}
      className="group btn btn-ghost hover:bg-transparent m-1"
    >
      <div className="w-7 flex flex-col gap-2 overflow-x-hidden">
        <span
          className={`w-full h-1 transition-all ${
            navToggle
              ? "translate-x-5 bg-primary"
              : "bg-navy-slate translate-x-1"
          } group-hover:translate-x-5 group-hover:bg-primary ease-in-out duration-300`}
        ></span>
        <span
          className={`w-full h-1  ${
            navToggle ? "bg-primary" : "bg-navy-slate"
          } transition-all translate-x-3 group-hover:translate-x-3 group-hover:bg-primary ease-in-out duration-300`}
        ></span>
        <span
          className={`w-full h-1 transition-all ${
            navToggle
              ? "bg-primary translate-x-1"
              : "bg-navy-slate translate-x-5"
          } group-hover:translate-x-1 group-hover:bg-primary ease-in-out duration-300`}
        ></span>
      </div>
    </button>
  );
};

export default NavToggler;
