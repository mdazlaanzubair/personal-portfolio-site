"use client";

import EducationContextProvider from "@/context/EducationContext";
import SocialContextProvider from "@/context/SocialContext";

import useThemeStore from "@/store/ThemeStore";

import TopNav from "../navigation/TopNav";
import NextSideNav from "../navigation/NextSideNav";
import Intro from "./Intro";
import Skills from "./Skills";
import Education from "./Education";

const CredentialsMainSection = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);

  return (
    <main data-theme={isDark ? "night" : "winter"}>
      <div className="w-full m-0 p-0 bg-dark text-base-content">
        <div className="container mx-auto pl-16 pr-3 lg:px-16 py-5">
          <SocialContextProvider>
            <TopNav />
          </SocialContextProvider>

          <NextSideNav />

          <Intro />

          <div className="my-20"></div>

          <Skills />

          <div className="my-20"></div>

          <EducationContextProvider>
            <Education />
          </EducationContextProvider>
        </div>
      </div>
    </main>
  );
};

export default CredentialsMainSection;
