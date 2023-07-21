"use client";

import { useEffect } from "react";
import useScrollStore from "@/store/ScrollStore";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Experience from "@/components/experiance/Experience";
import Project from "@/components/project/Project";
import ExperienceContextProvider from "@/context/ExperienceContext";
import ProjectContextProvider from "@/context/ProjectContext";
import Contact from "@/components/contact/Contact";
import ServiceContextProvider from "@/context/ServiceContext";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/navigations/SideNav";
import SocialContextProvider from "@/context/SocialContext";
import TopNav from "@/components/navigations/TopNav";

export default function Home() {
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
    <main className="w-full bg-dark pl-16 pr-3 lg:px-16 py-5">
      <div className="container mx-auto">
        <SocialContextProvider>
          <TopNav />
        </SocialContextProvider>

        <SideNav />

        <Hero />

        <div className="my-20"></div>

        <About />

        <div className="my-20"></div>

        <ServiceContextProvider>
          <Service />
        </ServiceContextProvider>

        <div className="my-20"></div>

        <ExperienceContextProvider>
          <Experience />
        </ExperienceContextProvider>

        <div className="my-20"></div>

        <ProjectContextProvider>
          <Project />
        </ProjectContextProvider>

        <div className="my-20"></div>

        <Contact />

        <div className="my-20"></div>

        <Footer />
      </div>
    </main>
  );
}
