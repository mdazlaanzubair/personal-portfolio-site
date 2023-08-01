"use client";

import useThemeStore from "@/store/ThemeStore";
import accentLogo from "../public/logo/accent/radial-grad.svg";
import darkLogo from "../public/logo/dark/radial-grad.svg";

function LoaderLogo() {
  const isDark = useThemeStore((state) => state.isDarkMode);

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-opacity-95 min-w-full z-50 ${
        isDark ? "bg-base-100" : "bg-white"
      }`}
    >
      <img
        className="absolute w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
        src={isDark ? accentLogo.src : darkLogo.src}
        alt="Muhammad Azlaan Zubair - Logo"
      />
    </div>
  );
}

export default LoaderLogo;
