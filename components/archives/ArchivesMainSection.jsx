"use client";

import SocialContextProvider from "@/context/SocialContext";

import useThemeStore from "@/store/ThemeStore";

import TopNav from "../navigation/TopNav";
import NextSideNav from "../navigation/NextSideNav";
import Footer from "../footer/Footer";
import Archives from "./Archives";
import ProjectContextProvider from "@/context/ProjectContext";

const ArchivesMainSection = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);

  return (
    <main data-theme={isDark ? "night" : "winter"}>
      <div className="w-full m-0 p-0 text-base-content">
        <div className="container mx-auto pl-16 pr-3 lg:px-16 py-5">
          <SocialContextProvider>
            <TopNav />
          </SocialContextProvider>

          <NextSideNav />

          <ProjectContextProvider>
            <Archives />
          </ProjectContextProvider>

          <div className="my-20"></div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ArchivesMainSection;
