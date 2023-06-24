"use client";

import { useEffect } from "react";
import { useGlobalContext } from "./context/GlobalContext";
import Footer from "@/components/Footer";
import LeftSection from "@/components/LeftSection";
import MainSection from "@/components/MainSection";
import Header from "@/components/header/Header";
import MobileNav from "@/components/header/MobileNav";

export default function Home() {
  const { setScrollPos, navToggle } = useGlobalContext();

  const handleScroll = () => {
    setScrollPos({
      x_axis: window.scrollX,
      y_axis: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main>
      <Header />
      <div className="w-full min-h-screen flex justify-center items-top gap-20 px-5">
        <div className="hidden relative lg:flex flex-shrink-0">
          <LeftSection />
        </div>
        <div className="relative flex-grow">
          <MainSection />
          {navToggle ? <MobileNav /> : null}
        </div>
      </div>

      <Footer />
    </main>
  );
}
