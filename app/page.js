"use client";

import { useEffect } from "react";

import MainSection from "@/components/MainSection";
import FloatingNav from "@/components/navigations/FloatingNav";
import useThemeStore from "@/store/ThemeStore";
import useScrollStore from "@/store/ScrollStore";

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
      <MainSection />

      <FloatingNav />
    </main>
  );
}
