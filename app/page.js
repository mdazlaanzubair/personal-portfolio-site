"use client";

import { useEffect } from "react";

import MainSection from "@/components/MainSection";
import FloatingNav from "@/components/navigations/FloatingNav";
import useThemeStore from "@/store/ThemeStore";
import useScrollStore from "@/store/ScrollStore";
import SpotLight from "@/components/SpotLight";

export default function Home() {
  const isDark = useThemeStore((state) => state.isDarkMode);
  const scrollTracker = useScrollStore((state) => state.scrollTracker);

  const handleScroll = () => {
    scrollTracker({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main data-theme={isDark ? "night" : "winter"}>
      <div className="bg-dark px-5 lg:px-16 py-5 lg:py-16">
        {/* <SpotLight /> */}
        <MainSection />
        <FloatingNav />
      </div>
    </main>
  );
}
