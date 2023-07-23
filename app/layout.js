import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  referrer: "origin-when-cross-origin",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://mdazlaanzubair.vercel.app"),
  icons: {
    icon: "@/public/icons/favicons/icon.png",
    shortcut: "@/public/icons/favicons/shortcut-icon.png",
    apple: "@/public/icons/favicons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "@/public/icons/favicons/apple-touch-icon.png",
    },
    appleTouchIcon: "@/public/icons/favicons/apple-touch-icon.png",

    // icon: {
    //   sizes: "32x32",
    //   type: "image/png",
    //   rel: "icon",
    //   href: "@/public/icons/favicons/favicon-32x32.png",
    // },
    // icon: {
    //   sizes: "16x16",
    //   type: "image/png",
    //   rel: "icon",
    //   href: "@/public/icons/favicons/favicon-16x16.png",
    // },
    // manifest: "@/public/icons/favicons/site.webmanifest",
    // maskIcon: {
    //   href: "@/public/icons/favicons/safari-pinned-tab.svg",
    //   color: "#ffffff",
    // },
    // msapplicationTileColor: "#ffffff",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mdazlaanzubair.vercel.app",
    title: "Muhammad Azlaan Zubair",
    siteName: "Muhammad Azlaan Zubair - Portfolio Website",
    creator: "Muhammad Azlaan Zubair",
    publisher: "Muhammad Azlaan Zubair",
    author: "Muhammad Azlaan Zubair",
    description:
      "My portfolio showcases my skills as a web developer and designer. I have experience with a variety of programming languages and technologies, and I am always looking for new challenges. I offer here services that matters and you need. I offer here cheap services. Looking for a freelancer, I'm here to help.",
    images: "/og-image.png",
    locale: "en_US",
    type: "website",
  },
  title: {
    default: "Portfolio | Muhammad Azlaan Zubair",
    template: "%s | Muhammad Azlaan Zubair",
  },
  applicationName: "Muhammad Azlaan Zubair - Portfolio Website",
  creator: "Muhammad Azlaan Zubair",
  publisher: "Muhammad Azlaan Zubair",
  author: "Muhammad Azlaan Zubair",
  description:
    "My portfolio showcases my skills as a web developer and designer. I have experience with a variety of programming languages and technologies, and I am always looking for new challenges. I offer here services that matters and you need. I offer here cheap services. Looking for a freelancer, I'm here to help.",
  keywords: [
    "web",
    "developer",
    "designer",
    "coder",
    "programmer",
    "developer",
    "graphics",
    "designer",
    "content",
    "writer",
    "writer",
    "freelancer",
    "cheap",
    "developer",
    "full",
    "stack",
    "mern",
    "next",
    "js",
    "react",
    "javascript",
    "html",
    "css",
    "tailwind",
    "css",
    "Muhammad Azlaan Zubair",
    "Md Azlaan Zubair",
    "Muhammad Azlaan",
    "Azlaan Zubair",
    "Muhammad",
    "Azlaan",
    "Zubair",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden m-0 p-0 ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
