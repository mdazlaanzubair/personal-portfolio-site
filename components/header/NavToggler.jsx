"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";

const NavToggler = () => {
  const { navToggle, setNavToggle } = useGlobalContext();

  return (
    <div
      className="group w-7 flex flex-col overflow-x-hidden cursor-pointer"
      onClick={() => setNavToggle(!navToggle)}
    >
      <span
        className={`w-full my-1 h-1 transition-all ${
          navToggle
            ? "translate-x-5 bg-primary"
            : "bg-base-content translate-x-1"
        } group-hover:translate-x-5 group-hover:bg-primary ease-in-out duration-300`}
      ></span>
      <span
        className={`w-full my-1 h-1  ${
          navToggle ? "bg-primary" : "bg-base-content"
        } transition-all translate-x-3 group-hover:translate-x-3 group-hover:bg-primary ease-in-out duration-300`}
      ></span>
      <span
        className={`w-full my-1 h-1 transition-all ${
          navToggle
            ? "bg-primary translate-x-1"
            : "bg-base-content translate-x-5"
        } group-hover:translate-x-1 group-hover:bg-primary ease-in-out duration-300`}
      ></span>
    </div>
  );
};

export default NavToggler;
