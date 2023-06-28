"use client";

import { useEffect } from "react";
import GlobalContextProvider from "./context/GlobalContext";

import Footer from "@/components/footer/Footer";
import MainSection from "@/components/MainSection";
import Header from "@/components/header/Header";
import MobileNav from "@/components/header/MobileNav";
import SocialNav from "@/components/header/SocialNav";
import SocialMobileNav from "@/components/header/SocialMobileNav";
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
    <GlobalContextProvider>
      <main data-theme={isDark ? "night" : "winter"}>
        {/* <SpotLight /> */}
        <Header />

        <div className="w-full min-h-screen flex justify-center items-top gap-20 px-7 lg:px-20">
          <div className="relative flex-grow">
            <SocialNav />
            <MainSection />
            <MobileNav />
          </div>
        </div>

        <SocialMobileNav />
        <Footer />
      </main>
    </GlobalContextProvider>
  );
}
