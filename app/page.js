"use client";

import { useEffect } from "react";
import MainSection from "@/components/MainSection";
import FloatingNav from "@/components/navigations/FloatingNav";
import useThemeStore from "@/store/ThemeStore";
import useScrollStore from "@/store/ScrollStore";
import SpotLight from "@/components/SpotLight";
import SideNav from "@/components/navigations/SideNav";
import SocialNav from "@/components/navigations/SocialNav";

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
      {/* <SpotLight /> */}
      <div className="bg-dark pl-16 pr-2 lg:px-16 py-16">
        <SocialNav />
        {/* <FloatingNav /> */}
        <SideNav />
        <MainSection />
      </div>
    </main>
  );
}
