"use client";

import { motion } from "framer-motion";

import useThemeStore from "@/store/ThemeStore";
import { BsSun as Sun } from "react-icons/bs";
import { BiMoon as Moon } from "react-icons/bi";

const ThemeToggler = ({ animation_variant }) => {
  const isDark = useThemeStore((state) => state.isDarkMode);
  const darkModeToggler = useThemeStore((state) => state.darkModeToggler);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 1.5 }}
      type="button"
      className="btn btn-ghost btn-square bg-base-100 hover:text-yellow-400 hover:bg-transparent text-xl rounded-sm"
      onClick={darkModeToggler}
    >
      {isDark ? <Sun /> : <Moon />}
    </motion.button>
  );
};

export default ThemeToggler;
