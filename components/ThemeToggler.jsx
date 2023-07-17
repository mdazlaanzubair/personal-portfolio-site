"use client";

import useThemeStore from "@/store/ThemeStore";
import { BsSun as Sun } from "react-icons/bs";
import { BiMoon as Moon } from "react-icons/bi";

const ThemeToggler = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);
  const darkModeToggler = useThemeStore((state) => state.darkModeToggler);

  return (
    <button
      type="button"
      className="fixed top-2 right-2 btn btn-ghost btn-square text-2xl bg-base-100 hover:text-primary hover:bg-transparent shadow"
      onClick={darkModeToggler}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
