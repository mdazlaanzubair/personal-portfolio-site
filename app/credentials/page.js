"use client";

import NextSideNav from "@/components/navigations/NextSideNav";
import TopNav from "@/components/navigations/TopNav";
import SocialContextProvider from "@/context/SocialContext";
import Intro from "@/components/credentials/Intro";
import Skills from "@/components/credentials/Skills";
import Education from "@/components/credentials/Education";
import EducationContextProvider from "@/context/EducationContext";

const AboutPage = () => {
  return (
    <main className="w-full bg-dark pl-16 pr-3 lg:px-16 py-5">
      <div className="container mx-auto">
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
    </main>
  );
};

export default AboutPage;
