"use client";

import useThemeStore from "@/store/ThemeStore";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const isDark = useThemeStore((state) => state.isDarkMode);
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="web developer, designer, coder, programmer, developer, graphics designer, content writer, writer, freelancer, cheap developer, full, stack, mern, next, js, react, javascript, html, css, tailwind css,"
        />
        <meta name="author" content="Muhammad Azlaan Zubair" />
        <meta
          name="description"
          content="My portfolio showcases my skills as a web developer and designer. I have experience with a variety of programming languages and technologies, and I am always looking for new challenges. I offer here services that matters and you need. I offer here cheap services. Looking for a freelancer, I'm here to help."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mdazlaanzubair.vercel.app/" />
        <title>Md Azlaan Zubair | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        data-theme={isDark ? "night" : "winter"}
        className={`relative overflow-x-hidden text-base-content m-0 p-0 ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
