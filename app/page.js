"use client";

import Footer from "@/components/Footer";
import LeftSection from "@/components/LeftSection";
import MainSection from "@/components/MainSection";
import RightSection from "@/components/RightSection";
import Header from "@/components/header/Header";
import { useEffect, useRef } from "react";

export default function Home() {
  const searchLightRef = useRef(null);

  const mouseMoveHandler = (event) => {
    const lightElement = searchLightRef.current;
    if (lightElement) {
      lightElement.style.top = event.pageY - 250 + "px";
      lightElement.style.left = event.pageX - 250 + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const containerStyle = {
    background:
      "radial-gradient(600px at 1498px 1126px, rgba(29, 78, 216, 0.15), transparent 80%)",
  };

  return (
    <main>
      {searchLightRef.current ?? (
        <div className="search-light hidden lg:flex" ref={searchLightRef}></div>
      )}

      <Header />

      <div className="w-full min-h-screen flex justify-center items-top gap-20 px-5">
        <div className="hidden relative lg:flex flex-shrink-0">
          <LeftSection />
        </div>
        <div className="relative flex-grow">
          <MainSection />
        </div>
        <div className="hidden relative lg:flex flex-shrink-0">
          <RightSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
