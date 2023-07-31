"use client";

import SocialContextProvider from "@/context/SocialContext";
import ServiceContextProvider from "@/context/ServiceContext";
import ExperienceContextProvider from "@/context/ExperienceContext";
import ProjectContextProvider from "@/context/ProjectContext";

import useThemeStore from "@/store/ThemeStore";

import TopNav from "./navigation/TopNav";
import SideNav from "./navigation/SideNav";
import Hero from "./hero/Hero";
import About from "./about/About";
import Service from "./service/Service";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const IndexMainSection = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);
  return (
    <main data-theme={isDark ? "night" : "winter"}>
      <div className="w-full m-0 p-0 text-base-content">
        <div className="container mx-auto pl-16 pr-3 lg:px-16 py-5">
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
      </div>
    </main>
  );
};

export default IndexMainSection;
