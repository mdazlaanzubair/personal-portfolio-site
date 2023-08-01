"use client";

import { motion } from "framer-motion";

import useThemeStore from "@/store/ThemeStore";
import { BsSun as Sun } from "react-icons/bs";
import { BiMoon as Moon } from "react-icons/bi";

const ThemeToggler = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);
  const darkModeToggler = useThemeStore((state) => state.darkModeToggler);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      type="button"
      className="btn btn-ghost btn-square bg-base-100 hover:text-yellow-400 hover:bg-transparent text-xl rounded-sm"
      onClick={darkModeToggler}
    >
      {isDark ? <Sun /> : <Moon />}
    </motion.button>
  );
};

export default ThemeToggler;
