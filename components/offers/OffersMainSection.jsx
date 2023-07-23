"use client";

import SocialContextProvider from "@/context/SocialContext";

import useThemeStore from "@/store/ThemeStore";

import TopNav from "../navigation/TopNav";
import NextSideNav from "../navigation/NextSideNav";
import Offerings from "./Offerings";
import OffersContextProvider from "@/context/OffersContext";
import ServiceContextProvider from "@/context/ServiceContext";
import Footer from "../footer/Footer";

const OffersMainSection = () => {
  const isDark = useThemeStore((state) => state.isDarkMode);

  return (
    <main data-theme={isDark ? "night" : "winter"}>
      <div className="w-full m-0 p-0 bg-dark text-base-content">
        <div className="container mx-auto pl-16 pr-3 lg:px-16 py-5">
          <SocialContextProvider>
            <TopNav />
          </SocialContextProvider>

          <NextSideNav />

          <OffersContextProvider>
            <ServiceContextProvider>
              <Offerings />
            </ServiceContextProvider>
          </OffersContextProvider>

          <div className="my-20"></div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default OffersMainSection;
