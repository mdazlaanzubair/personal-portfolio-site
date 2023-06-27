"use client";

import SpotLight from "@/components/SpotLight";
import GlobalContextProvider from "./context/GlobalContext";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import useTheme from "@/store/useTheme";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Muhammad Azlaan Zubair",
  description: "Web developer portfolio.",
};

export default function RootLayout({ children }) {
  const isDark = useTheme((state) => state.isDark);

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", isDark ? "night" : "white");
  }, [isDark]);

  return (
    <GlobalContextProvider>
      <html lang="en">
        <body
          data-theme={"night"}
          className={`relative overflow-x-hidden text-base-content ${montserrat.className}`}
        >
          {children}
          <SpotLight />
        </body>
      </html>
    </GlobalContextProvider>
  );
}
