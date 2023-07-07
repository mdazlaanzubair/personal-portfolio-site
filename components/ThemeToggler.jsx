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
      className="text-primary hover:text-yellow-500 text-xl btn btn-ghost btn-circle hover:bg-transparent"
      onClick={darkModeToggler}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
