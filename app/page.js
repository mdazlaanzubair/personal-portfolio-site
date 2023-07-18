"use client";

import { useEffect } from "react";
import MainSection from "@/components/MainSection";
import useThemeStore from "@/store/ThemeStore";
import useScrollStore from "@/store/ScrollStore";
import SideNav from "@/components/navigations/SideNav";
import SocialNav from "@/components/navigations/SocialNav";
import SocialContextProvider from "@/context/SocialContext";

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
      <SocialContextProvider>
        <SocialNav />
      </SocialContextProvider>

      <div className="bg-dark pl-16 pr-3 lg:px-16 py-16">
        <SideNav />
        <MainSection />
      </div>
    </main>
  );
}
